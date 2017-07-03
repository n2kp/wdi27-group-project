angular
  .module('projectApp')
  .config(Auth);

Auth.$inject = ['$authProvider'];
function Auth($authProvider) {
  $authProvider.signupUrl= '/api/register';
  $authProvider.loginUrl= '/api/login';
  $authProvider.github({
    url: '/api/oauth/github',
    clientId: 'c85f30ebc47187984984'
  });
}
