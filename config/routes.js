const router = require('express').Router();
const projects = require('../controllers/projects');

router.route('/projects')
  .get(projects.index)
  .post(projects.create);

router.route('/projects/:id')
  .get(projects.show)
  .delete(projects.delete)
  .post(projects.update);

// router.all('/*', (req, res) => res.notFound());

module.exports = router;
