const Project = require('../models/project');

function indexRoute(req, res, next){
  Project
  .find()
  .exec()
  .then((projects) => res.json(projects))
  .catch(next);
}

function createRoute(req, res, next){
  Project
  .create(req.body)
  .then((project) => res.status(201).json(project))
  .catch(next);
}

function showRoute(req, res, next){
  Project
  .findById(req.params.id)
  .exec()
  .then((project) => {
    if(!project) return res.notFound();

    res.json(project);
  })
  .catch(next);
}

function deleteRoute(req, res, next){
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

function updateRoute(req, res, next){
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
  .then(()=> res.redirect(`/projects/${req.params.id}`))
  .catch((err) => {
    if(err.name === 'ValidationError') return res.badRequest(`/projects/${req.params.id}/edit`, err.toString());
    next(err);

  });
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  delete: deleteRoute,
  update: updateRoute
};
