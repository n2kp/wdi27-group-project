const router = require('express').Router();
const projects = require('../controllers/projects');
const users = require('../controllers/users');
const auth = require('../controllers/auth');
// const secureRoute = require('../lib/secureRoute');

router.get('/', (req, res) =>
res.render('statics/home'));

router.route('/projects')
  .get(projects.index)
  .post(projects.create);


router.route('/projects/:id')
  .get(projects.show)
  .delete(projects.delete)
  .post(projects.update);


router.route('/users/:id')
  .get(users.show)
  .put(users.update)
  .delete(users.delete);


router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);





router.all('/*', (req, res) => res.notFound());

module.exports = router;