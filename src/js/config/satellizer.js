angular
  .module('projectApp')
  .config(Auth);

Auth.$inject = ['$authProvider'];
function Auth($authProvider) {
  $authProvider.signupUrl= '/api/register';
  $authProvider.loginUrl= '/api/login';
  $authProvider.github({
    url: '/api/oauth/github',
    clientId: '3b52a459493f385a38db'
  });
  $authProvider.linkedin({
    url: '/api/oauth/linkedin',
    clientId: '7754lrphmgz1vt'
  });
}
