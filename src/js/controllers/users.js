angular
  .module('projectApp')
  .controller('UsersIndexCtrl', UsersIndexCtrl)
  .controller('UsersShowCtrl', UsersShowCtrl)
  .controller('UsersEditCtrl', UsersEditCtrl);

UsersIndexCtrl.$inject = ['User'];
function UsersIndexCtrl(User) {
  const vm = this;

  vm.all = User.query();
}

UsersShowCtrl.$inject = ['User', '$state', '$auth'];
function UsersShowCtrl(User, $state, $auth) {
  const vm = this;
  const { userId } = $auth.getPayload();

  if(userId) vm.user = User.get({ id: userId });

  function logout() {
    $auth.logout();
    $state.go('login');
  }
  
  function usersDelete() {
    vm.user
      .$remove()
      .then(() => $state.go('usersIndex'));
  }

  vm.logout = logout;
  vm.delete = usersDelete;
}

UsersEditCtrl.$inject = ['User', '$stateParams', '$state'];
function UsersEditCtrl(User, $stateParams, $state) {
  const vm = this;

  vm.user = User.get($stateParams);

  function usersUpdate() {
    if(vm.userForm.$valid) {
      vm.user
        .$update()
        .then(() => $state.go('usersShow', $stateParams));
    }
  }
  vm.update = usersUpdate;
}
