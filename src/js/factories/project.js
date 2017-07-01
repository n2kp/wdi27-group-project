angular
  .module('projectApp')
  .factory('Project', Project);


Project.$inject = ['$resource'];
function Project($resource) {
  return new $resource('/api/projects/:id', { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
