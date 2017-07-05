const mongoose = require('mongoose');
const s3 = require('../lib/s3');



const projectSchema = new mongoose.Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  image: {type: String},
  projectUrl: {type: String, required: true},
  tech: [{type: String, required: true}],
  dateCreated: {type: Date},
  createdBy: {type: mongoose.Schema.ObjectId, ref: 'User'},
  likes: [ { type: mongoose.Schema.ObjectId, ref: 'User' } ]

});

projectSchema
  .virtual('imageSRC')
  .get(function getImageSRC() {
    if(!this.image) return null;
    if(this.image.match(/^http/)) return this.image;
    return `https://s3-eu-west-1.amazonaws.com/wdi27group-project/${this.image}`;
  });

projectSchema.pre('remove', function(next) {
  if(this.image) return s3.deleteObject({ Key: this.image }, next);
  next();
});

projectSchema
  .path('image')
  .set(function getPreviousImage(image) {
    this._image = this.image;
    return image;
  });

projectSchema.pre('save', function checkPreviousImage(next) {
  if(this.isModified('image') && this._image) {
    return s3.deleteObject({ Key: this._image }, next);
  }
  next();
});






module.exports = mongoose.model('Project', projectSchema);
