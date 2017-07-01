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
  dateCreated: {type: Date}
  // createdBy: {type: mongoose.Schema.ObjectId, ref: 'User'},
  // likes: [{type: mongoose.Schema.ObjectId, ref: 'User'}]//

});
projectSchema.statics.tech = tech;
module.exports = mongoose.model('Project', projectSchema);
