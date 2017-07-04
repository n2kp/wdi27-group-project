angular
.module('projectApp')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', '$state', '$auth', '$transitions'];
function MainCtrl($rootScope, $state, $auth, $transitions) {
  const vm = this;
  // vm.menuIsOpen = false;

  vm.availableTechs = [  'JavaScript',
    'Java',
    'Python',
    'Ruby',
    'C#',
    'Rails',
    'C++',
    'PHP',
    'SQL',
    'Android',
    'AngularJS',
    'Apache',
    'Babel',
    'BackboneJS',
    'Bootstrap',
    'Bower',
    'NPM',
    'Yarn',
    'CSS3',
    'SCSS/SASS'];

  vm.selected = { value: vm.availableTechs };


  vm.isAuthenticated = $auth.isAuthenticated;

  $rootScope.$on('error', (e, err) => {
    vm.message = err.data.message;
    if(err.status === 401 && vm.pageName !== 'login') {
      vm.stateHasChanged = false;
      $state.go('login');
    }
  });

  $transitions.onSuccess({}, (transition) => {
    vm.pageName = transition.$to().name;
    vm.menuIsOpen = false;
    console.log(vm.menuIsOpen);
    if(vm.stateHasChanged) vm.message = null;
    if(!vm.stateHasChanged) vm.stateHasChanged = true;
    if($auth.getPayload()) vm.currentUserId = $auth.getPayload().userId;
    console.log(vm.currentUserId);
  });

  function logout() {
    $auth.logout();
    $state.go('login');
  }

  vm.logout = logout;
}
