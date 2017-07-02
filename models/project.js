const mongoose = require('mongoose');



const tech =[
  'JavaScript',
  'Java',
  'Python',
  'Ruby',
  'C#',
  'Rails',
  'C++',
  'PHP',
  'SQL',
  'Android',
  'AngularJS',
  'Apache',
  'Babel',
  'BackboneJS',
  'Bootstrap',
  'Bower',
  'NPM',
  'Yarn',
  'CSS3',
  'SCSS/SASS'
];

const projectSchema = new mongoose.Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  image: {type: String},
  projectUrl: {type: String, required: true},
  tech: [{type: String}],
  dateCreated: {type: Date},
  createdBy: {type: mongoose.Schema.ObjectId, ref: 'User'},
  likes: [{type: mongoose.Schema.ObjectId, ref: 'User'}]

});

projectSchema
  .virtual('imageSRC')
  .get(function getImageSRC() {
    if(!this.image) return null;
    if(this.image.match(/^http/)) return this.image;
    return `https://s3-eu-west-1.amazonaws.com/wdi27group-project/${this.image}`;
  });



projectSchema.statics.tech = tech;
module.exports = mongoose.model('Project', projectSchema);
