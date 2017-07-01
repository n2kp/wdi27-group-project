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

UsersShowCtrl.$inject = ['User', '$state'];
function UsersShowCtrl(User, $state) {
  const vm = this;
  vm.user = User.get($state.params);
  console.log(vm.user);

  function usersDelete() {
    vm.user
      .$remove()
      .then(() => $state.go('usersIndex'));
  }

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
