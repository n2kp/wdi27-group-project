angular
  .module('projectApp')
  .controller('UsersShowCtrl', UsersShowCtrl)
  .controller('UsersEditCtrl', UsersEditCtrl)
  .controller('UsersDeleteCtrl', UsersDeleteCtrl);

UsersShowCtrl.$inject = ['User', '$state', '$auth', '$uibModal'];
function UsersShowCtrl(User, $state, $auth, $uibModal) {
  const vm = this;
  vm.user = User.get($state.params);
  console.log(vm.user);

  function logout() {
    $auth.logout();
    $state.go('login');
  }

  vm.logout = logout;

  function openModal() {
    $uibModal.open({
      templateUrl: 'js/views/partials/userDeleteModal.html',
      controller: 'UsersDeleteCtrl as usersDelete',
      resolve: {
        user: () => {
          return vm.user;
        }
      }
    });
  }

  vm.open = openModal;
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

UsersDeleteCtrl.$inject = ['$uibModalInstance', 'user', '$state'];
function UsersDeleteCtrl($uibModalInstance, user, $state) {
  const vm = this;
  vm.user = user;

  function closeModal() {
    $uibModalInstance.close();
  }

  vm.closeModal = closeModal;

  function usersDelete() {
    vm.user
      .$remove()
      .then(() => {
        $state.go('home');
        $uibModalInstance.close();
      });
  }

  vm.delete = usersDelete;

}
