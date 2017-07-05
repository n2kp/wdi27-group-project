angular
  .module('projectApp')
  .controller('UsersShowCtrl', UsersShowCtrl)
  .controller('UsersEditCtrl', UsersEditCtrl)
  .controller('UsersDeleteCtrl', UsersDeleteCtrl);

UsersShowCtrl.$inject = ['User', '$state', '$auth', '$uibModal'];
function UsersShowCtrl(User, $state, $auth, $uibModal) {
  const vm = this;
  User.get($state.params, (data)=>{
    vm.user = data;
    console.log(vm.user);
  });

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
  vm.avatars = ['/images/avatar-a.jpg', '/images/avatar-b.jpg', '/images/avatar-c.jpg', '/images/avatar-d.jpg', '/images/avatar-e.jpg', '/images/avatar-f.jpg', '/images/avatar-g.jpg', '/images/avatar-h.jpg'];


  User.get($stateParams)
    .$promise
    .then((user) => {
      vm.user = user;
      if(!vm.user.avatar) vm.user.avatar = vm.avatars[Math.floor(Math.random() * vm.avatars.length)];
    });

  function selectAvatar(avatar) {
    console.log(avatar);
    vm.user.avatar = avatar;
  }

  vm.selectAvatar = selectAvatar;

  function usersUpdate() {
    console.log(vm.user);
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
