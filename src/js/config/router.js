angular
  .module('projectApp')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'js/views/statics/home.html'
  })
    .state('projectsIndex', {
      url: '/projects',
      templateUrl: 'js/views/projects/index.html',
      controller: 'ProjectsIndexCtrl as projectsIndex'
    })
    .state('projectsNew', {
      url: '/projects/new',
      templateUrl: 'js/views/projects/new.html',
      controller: 'ProjectsNewCtrl as projectsNew'
    })
    .state('projectsShow', {
      url: '/projects/:id',
      templateUrl: 'js/views/projects/show.html',
      controller: 'ProjectsShowCtrl as projectsShow'
    })
    .state('projectsEdit', {
      url: '/projects/:id/edit',
      templateUrl: 'js/views/projects/edit.html',
      controller: 'ProjectsEditCtrl as projectsEdit'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'js/views/auth/login.html',
      controller: 'LoginCtrl as login'
    })
    .state('usersIndex', {
      url: '/users',
      templateUrl: 'js/views/users/index.html',
      controller: 'UsersIndexCtrl as usersIndex'
    })
    .state('usersShow', {
      url: '/users/:id',
      templateUrl: 'js/views/users/show.html',
      controller: 'UsersShowCtrl as usersShow'
    })
    .state('usersEdit', {
      url: '/users/:id/edit',
      templateUrl: 'js/views/users/edit.html',
      controller: 'UsersEditCtrl as usersEdit'
    })
    .state('events', {
      url: '/events',
      templateUrl: 'js/views/statics/events.html',
      controller: 'EventsCtrl as events'
    });

  $urlRouterProvider.otherwise('/');
}
