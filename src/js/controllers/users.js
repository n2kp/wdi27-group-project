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
    calculateProgressType();
  });


//in order to change the colors of the progressbar depending on the amount they have filled in.
  function calculateProgressType() {
    if (vm.user.percentageComplete < 35) {
      vm.type = 'crimson';
    } else if (vm.user.percentageComplete < 50 ) {
      vm.type ='danger';
    } else if (vm.user.percentageComplete < 75 ) {
      vm.type ='warning';
    } else {
      vm.type ='success';
    }
  }

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


//function for selecting Avatar and attaching it to the vm.user
  function selectAvatar(avatar) {
    vm.user.avatar = avatar;
  }

  vm.selectAvatar = selectAvatar;

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
