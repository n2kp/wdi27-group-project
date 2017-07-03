module.exports = {
  github: {
    loginURL: 'https://github.com/login/oauth/authorize',
    accessTokenURL: 'https://github.com/login/oauth/access_token',
    profileURL: 'https://api.github.com/user',
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    scope: 'user:email'
  },
  linkedin: {
    loginURL: 'https://www.linkedin.com/oauth/v2/authorization',
    response_type: 'code',
    client_id: process.env.LINKEDIN_CLIENT_ID,
    state: '1608CnA1904mPm1204'
  }
};
