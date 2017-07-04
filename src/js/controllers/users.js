angular
  .module('projectApp')
  .controller('UsersShowCtrl', UsersShowCtrl)
  .controller('UsersEditCtrl', UsersEditCtrl);



UsersShowCtrl.$inject = ['User', '$state', '$auth'];
function UsersShowCtrl(User, $state, $auth) {
  const vm = this;
  // const { userId } = $auth.getPayload();
  //
  // if(userId) vm.user = User.get({ id: userId });

  vm.user = User.get($state.params);

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
    if(vm.editForm.$valid) {
      vm.user
        .$update()
        .then(() => $state.go('usersShow', $stateParams));
    }
  }
  vm.update = usersUpdate;
}
