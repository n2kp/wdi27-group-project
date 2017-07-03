const rp = require('request-promise');
const oauth = require('../config/oauth');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');

function github(req, res, next) {
  return rp({
    method: 'POST',
    url: oauth.github.accessTokenURL,
    qs: {
      client_id: oauth.github.clientId,
      client_secret: oauth.github.clientSecret,
      code: req.body.code
    },
    json: true
  })
  .then((token) => {
    return rp({
      method: 'GET',
      url: oauth.github.profileURL,
      qs: token,
      json: true,
      headers: {
        'User-Agent': 'Request-Promise'
      }
    });
  })
  .then((profile) => {
    return User.findOne({ $or: [{ githubId: profile.id }, { email: profile.email }] })
      .then((user) => {
        if(!user) {
          user = new User({
            username: profile.login,
            email: profile.email
          });
        }

        user.githubId = profile.id;
        return user.save();
      });
  })
  .then((user) => {
    console.log(user);

    const payload = { userId: user.id };
    const token = jwt.sign(payload, secret, { expiresIn: '1hr' });

    return res.json({
      token,
      message: `Welcome back ${user.username}`
    });
  })
  .catch(next);
}

function linkedin(req, res, next) {
  return rp({
    method: 'POST',
    url: oauth.linkedin.accessTokenURL,
    qs: {
      grant_type: 'authorization_code',
      code: req.body.code,
      redirect_uri: oauth.linkedin.redirect_uri,
      client_id: oauth.linkedin.client_id,
      client_secret: oauth.linkedin.client_secret
    },
    json: true
  })
  .then((token) => {
    console.log(token);
    return rp({
      method: 'GET',
      url: 'https://api.linkedin.com/v1/people/~?format=json',
      qs: token,
      json: true,
      headers: {
        'Authorization': `Bearer ${token.access_token}`
      }
    });
  })
  .then((profile) => {
    console.log(profile);
    return User.findOne({ $or: [{ linkedinId: profile.id }, { email: profile.email }] })
      .then((user) => {
        if(!user) {
          user = new User({
            username: profile.login,
            email: profile.email
          });
        }

        user.linkedinId = profile.id;
        return user.save();
      });
  })
  .then((user) => {
    const payload = { userId: user.id };
    const token = jwt.sign(payload, secret, { expiresIn: '1hr' });

    return res.json({
      token,
      message: `Welcome back ${user.username}`
    });
  })
  .catch(next);
}

module.exports = {
  github,
  linkedin
};
