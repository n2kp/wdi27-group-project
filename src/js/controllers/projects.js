angular
  .module('projectApp')
  .controller('ProjectsIndexCtrl', ProjectsIndexCtrl)
  .controller('ProjectsNewCtrl', ProjectsNewCtrl)
  .controller('ProjectsShowCtrl', ProjectsShowCtrl)
  .controller('ProjectsEditCtrl', ProjectsEditCtrl)
  .controller('ProjectsDeleteCtrl', ProjectsDeleteCtrl);

ProjectsIndexCtrl.$inject = ['Project', 'filterFilter', '$scope', '$state'];
function ProjectsIndexCtrl(Project, filterFilter, $scope, $state) {
  const vm = this;
  vm.q = $state.params.tech;

  Project.query()
  .$promise
  .then((projects) => {
    vm.all = projects;
    filterProject();
  });

  function filterProject() {
    if(!vm.q) {
      vm.filtered = vm.all;
      return false;
    }

    const regex = new RegExp(vm.q, 'i');

    vm.filtered = filterFilter(vm.all, (project) => {
      return project.tech.some(tech => regex.test(tech));
    });
  }

  $scope.$watch(() => vm.q, filterProject);
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

ProjectsShowCtrl.$inject = ['Project', '$state', '$uibModal','User', '$auth'];
function ProjectsShowCtrl(Project, $state, $uibModal, User, $auth) {
  const vm = this;

  vm.project = Project.get($state.params);
  vm.userId = $auth.getPayload().userId;

  function like(){
    if(vm.project.likes.includes(vm.userId)) {
      const index = vm.project.likes.indexOf(vm.userId);
      vm.project.likes.splice(index, 1);
    } else {
      vm.project.likes.push(vm.userId);
    }

    Project
      .update({ id: vm.project.id }, vm.project)
      .$promise
      .then((project) => {
        console.log(project);
      });
  }

  vm.like = like;


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

  function projectsUpdate() {

    if(vm.editForm.$valid) {
      vm.project
        .$update()
        .then(() => $state.go('projectsShow', $stateParams));
    }
  }
  vm.update = projectsUpdate;
}

ProjectsDeleteCtrl.$inject = ['$uibModalInstance', 'project', '$state', 'Project'];
function ProjectsDeleteCtrl($uibModalInstance, project, $state, Project) {
  const vm = this;
  vm.project = project;

  function closeModal() {
    $uibModalInstance.close();
  }

  vm.closeModal = closeModal;

  function projectsDelete() {
    Project
    .remove(vm.project)
    .$promise
    .then(() => {
      $state.go('projectsIndex');
      $uibModalInstance.close();
    });
  }

  vm.delete = projectsDelete;
}
