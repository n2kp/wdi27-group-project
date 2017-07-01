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

  function projectsCreate() {
    if(vm.newForm.$valid) {
      Project
        .save(vm.project)
        .$promise
        .then(() => {
          // const payload =$auth.getPayload();
          $state.go('projectsIndex');
        })

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

  function projectsUpdate() {
    if(vm.projectForm.$valid) {
      vm.project
        .$update()
        .then(() => $state.go('projectsShow', $stateParams));
    }
  }
  vm.update = projectsUpdate;
}
