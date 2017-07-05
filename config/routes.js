const router = require('express').Router();
const projects = require('../controllers/projects');
const users = require('../controllers/users');
const auth = require('../controllers/auth');
const oauth = require('../controllers/oauth');
const secureRoute = require('../lib/secureRoute');
const imageUpload = require('../lib/imageUpload');
const eventbrite = require('../controllers/eventbrite');
const newsapi = require('../controllers/newsapi');

router.get('/', (req, res) =>
res.render('statics/home'));

router.route('/projects')
  .all(secureRoute)
  .get(projects.index)
  .post(imageUpload, projects.create);

router.route('/projects/:id')
  .all(secureRoute)
  .get(projects.show)
  .delete(projects.delete)
  .put(imageUpload, projects.update);

router.route('/users/:id')
  .all(secureRoute)
  .get(users.show)
  .put(imageUpload, users.update)
  .delete(users.delete);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.route('/oauth/github')
  .post(oauth.github);

router.route('/oauth/linkedin')
  .post(oauth.linkedin);

router.get('/events', eventbrite.events);

router.get('/news', newsapi.news);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
