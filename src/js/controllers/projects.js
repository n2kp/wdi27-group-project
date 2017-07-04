angular
  .module('projectApp')
  .controller('ProjectsIndexCtrl', ProjectsIndexCtrl)
  .controller('ProjectsNewCtrl', ProjectsNewCtrl)
  .controller('ProjectsShowCtrl', ProjectsShowCtrl)
  .controller('ProjectsEditCtrl', ProjectsEditCtrl)
  .controller('ProjectDeleteCtrl', ProjectDeleteCtrl);

ProjectsIndexCtrl.$inject = ['Project', 'filterFilter', '$scope'];
function ProjectsIndexCtrl(Project, filterFilter, $scope) {
  const vm = this;

  Project.query()
  .$promise
  .then((projects) => {
    vm.all = projects;
    filterProject();
  });

  function filterProject() {
    const params = { tech: vm.q };
    vm.filtered = filterFilter(vm.all, params);

  }



  $scope.$watchGroup([
    () => vm.q,

    () => vm.tech
  ], filterProject);
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

          $state.go('projectsIndex');
        });

    }
  }

  vm.create = projectsCreate;
}

ProjectsShowCtrl.$inject = ['Project', '$state', '$uibModal'];
function ProjectsShowCtrl(Project, $state, $uibModal) {
  const vm = this;
  vm.project = Project.get($state.params);

  // function projectsDelete() {
  //   vm.project
  //     .$remove()
  //     .then(() => $state.go('projectsIndex'));
  // }
  //
  // vm.delete = projectsDelete;

  function openModal() {
    $uibModal.open({
      templateUrl: 'js/views/partials/projectDeleteModal.html',
      controller: 'ProjectsDeleteCtrl as projectsDelete',
      resolve: {
        project: () => {
          return vm.project;
        }
      }
    });
  }

  vm.open = openModal;
}

ProjectsEditCtrl.$inject = ['Project', '$stateParams', '$state'];
function ProjectsEditCtrl(Project, $stateParams, $state) {
  const vm = this;

  vm.project = Project.get($stateParams);
  console.log(vm.project);

  function projectsUpdate() {
    console.log('running projects update');
    if(vm.editForm.$valid) {
      console.log('valid!');
      vm.project
        .$update()
        .then(() => $state.go('projectsShow', $stateParams));
    }
  }
  vm.update = projectsUpdate;
}

ProjectDeleteCtrl.$inject = ['$uibModalInstance', 'bird', '$state'];
function ProjectDeleteCtrl($uibModalInstance, project, $state) {
  const vm = this;
  vm.project = project;

  function closeModal() {
    $uibModalInstance.close();
  }

  vm.closeModal = closeModal;

  function projectsDelete() {
    vm.project
    .$remove()
    .then(() => {
      $state.go('projectsIndex');
      $uibModalInstance.close();
    });
  }

  vm.delete = projectsDelete;
}
