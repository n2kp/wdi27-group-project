/* global google */

angular
.module('projectApp')
.directive('googleMap', googleMap);

let map = null;
let latitude = '';
let longitude = '';
var infowindow = null;
var markers = [];
googleMap.$inject=['eventsService', 'mapStyles'];
function googleMap(eventsService, mapStyles) {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="map"></div>',
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
          zoom: 12,
          center: latLng,
          styles: mapStyles,
          scrollwheel: false
        });
        const icon = './images/youarehere.png';
        LocationMarker = new google.maps.Marker({
          map,
          animation: google.maps.Animation.DROP,
          position: latLng,
          icon: icon
        });

        eventsService
        .getEvents(parseFloat(position.coords.latitude), parseFloat(position.coords.longitude))
        .then((events) => {
          scope.events = events;
          // loop through events and add marker for each

          events.forEach((event) =>{
            addMarker(event);
          });
          function addMarker(event){
            const marker = new google.maps.Marker({
              position: event.location,
              map
            });

          marker.addListener('click', () => {
            markerClick(marker, events);
          });

            function markerClick(marker, events){
              if(infowindow) infowindow.close();
              const eventAPI = event;

              infowindow = new google.maps.InfoWindow({
                content: `${eventAPI.name}`
              });

              infowindow.open(map,marker);
            }
          }
        });
      }
    }
  };
}
