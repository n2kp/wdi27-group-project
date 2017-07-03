const Project = require('../models/project');

// function newProject(req, res) {//
//   return res.render('projects/new', { tech: Project.tech });
// }//

function indexProject(req, res, next){
  Project
  .find()
  .exec()
  .then((projects) => res.json(projects))
  .catch(next);
}

function createProject(req, res, next){
  if(req.file) req.body.image = req.file.filename;
  Project
  .create(req.body)
  .then((project) => res.status(201).json(project))
  .catch(next);
}

function showProject(req, res, next){
  Project
  .findById(req.params.id)
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
  Project
  .findById(req.params.id)
  .exec()
  .then((project) => {
    console.log('project to be added', project);
    if(!project) return res.notFound();


    for (const field in req.body) {
      project[field] = req.body[field];

    }
    return project.save();
  })
<<<<<<< HEAD
  .then((project)=> res.json(project))
  .catch(next);
=======
  .then(()=> res.redirect(`/projects/${req.params.id}`))
  .catch((err) => {
    if(err.name === 'ValidationError') return res.badRequest(`/projects/${req.params.id}/edit`, err.toString());
    next(err);
  });
>>>>>>> development
}

module.exports = {
  index: indexProject,
  create: createProject,
  show: showProject,
  delete: deleteProject,
  update: updateProject
};
