const Project = require('../models/project');



function indexProject(req, res, next){
  Project
  .find()
  .populate('createdBy')
  .exec()
  .then((projects) => res.json(projects))
  .catch(next);
}

function createProject(req, res, next){
  if(req.file) req.body.image = req.file.filename;

  req.body.createdBy = req.user;

  Project
  .create(req.body)
  .then((project) => res.status(201).json(project))
  .catch(next);
}

function showProject(req, res, next){
  Project
  .findById(req.params.id)
  .populate('createdBy')
  .exec()
  .then((project) => {
    if(!project) return res.notFound();

    res.json(project);
  })
  .catch(next);
}

function deleteProject(req, res, next){
  Project
  .findById(req.params.id)
  .exec()
  .then((project) => {
    if(!project) return res.notFound();

    return project.remove();
  })
  .then(() => res.status(204).end())
  .catch(next);
}

function updateProject(req, res, next){
  req.body.createdBy = req.body.createdBy.id;
  Project
  .findById(req.params.id)
  .exec()
  .then((project) => {
    if(!project) return res.notFound();


    for (const field in req.body) {
      project[field] = req.body[field];

    }
    return project.save();
  })

  .then((project)=> res.json(project))
  .catch(next);

}

module.exports = {
  index: indexProject,
  create: createProject,
  show: showProject,
  delete: deleteProject,
  update: updateProject
};
