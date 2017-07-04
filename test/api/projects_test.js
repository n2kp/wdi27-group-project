require('../helper');

const Project        = require('../../models/project');
const User        = require('../../models/user');
const jwt         = require('jsonwebtoken');
const { secret }  = require('../../config/environment');

let token;

describe('Project tests', () => {

  beforeEach(done => {
    Project.collection.remove();
    User.collection.remove();
    done();
  });

  describe('GET /api/projects', () => {

    beforeEach(done => {
      project.create({
        title: 'The Big J',
        description: 'Project to showcase a portfolio with a big J because the clients name was Jack and he wanted the site to show that',
        image: 'https://s3-eu-west-1.amazonaws.com/wdi27-devbook/portfolio_001.png',
        projectUrl: 'https://jacekjeznach.com/',
        tech: ['HTML5', 'CSS3'],
        dateCreated: '2017-04-12'
      }, done);
    });

    it('should return a 200 response', done => {
      api.get('/api/projects')
        .set('Accept', 'application/json')
        .expect(200, done);
    });

    it('should respond with a JSON object', done => {
      api.get('/api/projects')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.header['content-type']).to.be.eq('application/json; charset=utf-8');
          done();
        });
    });

    it('should return an array of projects', done => {
      api.get('/api/projects')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body).to.be.an('array');
          done();
        });
    });

    it('should return an array of project objects', done => {
      api.get('/api/projects')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body)
            .and.be.an('array')
            .and.have.property(0)
            .and.have.all.keys([
              'title',
              'description',
              'image',
              'projectUrl',
              'tech',
              'dateCreated'
            ]);
          done();
        });
    });
  });

  describe('POST /api/projects without token', () => {

    it('should return a 401 response', done => {
      api.post('/api/projects')
        .set('Accept', 'application/json')
        .send({
          project: {
            title: 'The Big J',
            description: 'Project to showcase a portfolio with a big J because the clients name was Jack and he wanted the site to show that',
            image: 'https://s3-eu-west-1.amazonaws.com/wdi27-devbook/portfolio_001.png',
            projectUrl: 'https://jacekjeznach.com/',
            tech: ['HTML5', 'CSS3'],
            dateCreated: '2017-04-12'
          }
        }).expect(401, done);
    });

  });

  describe('POST /api/projects with token', () => {

    beforeEach(done => {
      User.create({
        username: 'testuser',
        email: 'testuser@test.com',
        password: 'password',
        passwordConfirmation: 'password'
      }, (err, user) => {
        token = jwt.sign({ userId: user.id }, secret, { expiresIn: 60*60*24 });
        done();
      });
    });

    it('should return a 201 response', done => {
      api.post('/api/projects')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send({
          project: {
            title: 'The Big J',
            description: 'Project to showcase a portfolio with a big J because the clients name was Jack and he wanted the site to show that',
            image: 'https://s3-eu-west-1.amazonaws.com/wdi27-devbook/portfolio_001.png',
            projectUrl: 'https://jacekjeznach.com/',
            tech: ['HTML5', 'CSS3'],
            dateCreated: '2017-04-12'
          }
        }).expect(201, done);
    });

  });

  describe('GET /api/projects/:id', () => {

    let project;

    beforeEach(done => {
      Project.create({
        title: 'The Big J',
        description: 'Project to showcase a portfolio with a big J because the clients name was Jack and he wanted the site to show that',
        image: 'https://s3-eu-west-1.amazonaws.com/wdi27-devbook/portfolio_001.png',
        projectUrl: 'https://jacekjeznach.com/',
        tech: ['HTML5', 'CSS3'],
        dateCreated: '2017-04-12'
      }, (err, _project) => {
        project = _project;
        done();
      });
    });

    it('should return a 200 response', done => {
      api.get(`/api/projects/${project.id}`)
        .set('Accept', 'application/json')
        .expect(200, done);
    });

  });

  describe('DELETE /api/projects/:id without token', () => {

    let project;

    beforeEach(done => {
      Project.create({
        title: 'The Big J',
        description: 'Project to showcase a portfolio with a big J because the clients name was Jack and he wanted the site to show that',
        image: 'https://s3-eu-west-1.amazonaws.com/wdi27-devbook/portfolio_001.png',
        projectUrl: 'https://jacekjeznach.com/',
        tech: ['HTML5', 'CSS3'],
        dateCreated: '2017-04-12'
      }, (err, _project) => {
        project = _project;
        done();
      });
    });

    it('should return a 401 response', done => {
      api.delete(`/api/projects/${project.id}`)
        .set('Accept', 'application/json')
        .expect(401, done);
    });

  });

  describe('DELETE /api/projects/:id with token', () => {

    beforeEach(done => {
      User.create({
        username: 'testuser',
        email: 'testuser@test.com',
        password: 'password',
        passwordConfirmation: 'password'
      }, (err, user) => {
        token = jwt.sign({ userId: user.id }, secret, { expiresIn: 60*60*24 });
        done();
      });
    });

    it('should return a 204 response', done => {
      Project.create({
        title: 'The Big J',
        description: 'Project to showcase a portfolio with a big J because the clients name was Jack and he wanted the site to show that',
        image: 'https://s3-eu-west-1.amazonaws.com/wdi27-devbook/portfolio_001.png',
        projectUrl: 'https://jacekjeznach.com/',
        tech: ['HTML5', 'CSS3'],
        dateCreated: '2017-04-12'
      }, (err, project) => {
        api.delete(`/api/projects/${project.id}`)
          .set('Accept', 'application/json')
          .set('Authorization', `Bearer ${token}`)
          .expect(204, done);
      });
    });
  });

});
