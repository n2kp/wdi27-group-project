angular
.module('projectApp')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', '$state', '$auth', '$transitions'];
function MainCtrl($rootScope, $state, $auth, $transitions) {
  const vm = this;
  // vm.menuIsOpen = false;

  vm.availableTechs = [
    'Apache',
    'Centos',
    'Debian',
    'Docker',
    'Fedora',
    'Gentoo',
    'Git',
    'Gnome',
    'Gradle',
    'Grunt',
    'Gulp',
    'Jetty',
    'KDE',
    'npm',
    'Redhat',
    'Solaris',
    'Tomcat',
    'Aws',
    'Azure',
    'Codeigniter',
    'Codepen',
    'Dreamhost',
    'Heroku',
    'Magento',
    'Openshift',
    'Sitefinity',
    'Wordpress',
    'Cassandra',
    'Hadoop',
    'Mariadb',
    'Mongodb',
    'Mssql',
    'Mysql',
    'Oracle',
    'Postgres',
    'Redis',
    'Angular',
    'Backbone',
    'Bootstrap',
    'D3',
    'Grails',
    'Jquery',
    'Laravel',
    'Plone',
    'ReactJS',
    'Ruby-On-Rails',
    'Spring',
    'Symfony',
    'Unity',
    'C',
    'Clojure',
    'CPlusPlus',
    'CSharp',
    'CSS3',
    'Elixir',
    'Elm',
    'Erlang',
    'Go',
    'Haskell',
    'HTML5',
    'Java',
    'JavaScript',
    'Nodejs',
    'Objc',
    'Perl',
    'PHP',
    'Python',
    'Ruby',
    'Rust',
    'SASS',
    'Scala',
    'Script',
    'Shell'
  ];

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
