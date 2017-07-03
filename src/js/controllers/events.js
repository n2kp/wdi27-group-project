angular
  .module('projectApp')
  .controller('EventsCtrl', EventsCtrl)

EventsCtrl.$inject = ['eventsService'];
function EventsCtrl(eventsService) {
  const vm = this;

  vm.all = [];

  eventsService.getEvents()
    .then(events => vm.all = events);
}
