angular
  .module('projectApp')
  .directive('googleMap', googleMap);

let latitude = '';
let longitude = '';
googleMap.$inject=['eventsService'];
function googleMap(eventsService) {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="map">GOOGLE MAP HERE</div>',
    scope: {
      events: '='
    },
    link(scope, element) {
      console.log(element);

      getUserLocation();

      function getUserLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(initMap);
        } else {
          console.log('Geolocation is not supported by this browser.');
        }
      }

      function initMap(position) {
        const latLng = { lat: position.coords.latitude, lng: position.coords.longitude };

        const map = new google.maps.Map(element[0], {
          zoom: 14,
          center: latLng
        });

        new google.maps.Marker({
          map,
          position: latLng
        });

        eventsService
          .getEvents(parseFloat(position.coords.latitude), parseFloat(position.coords.longitude))
          .then((events) => {
            scope.events = events;
            // loop through events and add marker for each

            events.forEach((event) =>{

              marker = new google.maps.Marker({
                map,
                position: event.location
                
              });
            })
          });
      }
    }
  };
}
