angular
.module('projectApp')
.service('eventsService', EventsService);

EventsService.$inject = ['$http'];
function EventsService($http){
  this.getEvents = function getEvents() {
    return $http
      .get('/api/events')
      .then((response) => {
        return response.data.map(event => {
          return {
            name: event.name.text,
            description: event.description.text,
            url: event.url,
            startTime: event.start.utc,
            location: { lat: Number(event.venue.latitude), lng: Number(event.venue.longitude) },
            address: `${event.venue.name}, ${event.venue.address.localized_address_display}`
          };
        });
      });

  }
}
