angular
  .module('projectApp')
  .controller('RegisterCtrl', RegisterCtrl)
  .controller('LoginCtrl', LoginCtrl);

RegisterCtrl.$inject = ['$auth', '$state'];
function RegisterCtrl($auth, $state) {
  const vm = this;
  vm.user = {};

  function submit() {
    if (vm.registerForm.$valid) {
      $auth.signup(vm.user)
        .then(() => $state.go('login'))
        .catch(() => $state.go('register'));
    }
  }

  vm.submit = submit;

}

LoginCtrl.$inject = ['$auth', '$state'];
function LoginCtrl($auth, $state) {
  const vm = this;
  vm.credentials = {};

  function submit() {
    if (vm.loginForm.$valid) {
      $auth.login(vm.credentials)
        .then(() => {
          const payload = $auth.getPayload();
          $state.go('usersShow', { id: payload.userId });
        })
        .catch(() => $state.go('login'));
    }
  }

  vm.submit = submit;
  console.log(vm.user);
}
