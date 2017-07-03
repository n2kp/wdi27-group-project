angular
  .module('projectApp')
  .controller('ProjectsIndexCtrl', ProjectsIndexCtrl)
  .controller('ProjectsNewCtrl', ProjectsNewCtrl)
  .controller('ProjectsShowCtrl', ProjectsShowCtrl)
  .controller('ProjectsEditCtrl', ProjectsEditCtrl);

ProjectsIndexCtrl.$inject = ['Project'];
function ProjectsIndexCtrl(Project) {
  const vm = this;

  vm.all = Project.query();
}

ProjectsNewCtrl.$inject = ['Project', '$state'];
function ProjectsNewCtrl(Project, $state) {
  const vm = this;
  vm.project = {};

  vm.itemArray = [
        {id: 1, name: 'first'},
        {id: 2, name: 'second'},
        {id: 3, name: 'third'},
        {id: 4, name: 'fourth'},
        {id: 5, name: 'fifth'},
  ];

  vm.selected = { value: vm.itemArray[0] };

  function projectsCreate() {
    if(vm.newForm.$valid) {
      Project
        .save(vm.project)
        .$promise
        .then(() => {
          // const payload =$auth.getPayload();
          $state.go('projectsIndex');
        });

    }
  }

  vm.create = projectsCreate;
}

ProjectsShowCtrl.$inject = ['Project', '$state'];
function ProjectsShowCtrl(Project, $state) {
  const vm = this;
  vm.project = Project.get($state.params);

  function projectsDelete() {
    vm.project
      .$remove()
      .then(() => $state.go('projectsIndex'));
  }

  vm.delete = projectsDelete;
}

ProjectsEditCtrl.$inject = ['Project', '$stateParams', '$state'];
function ProjectsEditCtrl(Project, $stateParams, $state) {
  const vm = this;

  vm.project = Project.get($stateParams);
  console.log(vm.project);

  function projectsUpdate() {
    if(vm.editForm.$valid) {
      vm.project
        .$update()
        .then(() => $state.go('projectsShow', $stateParams));
    }
  }
  vm.update = projectsUpdate;
}
