angular
  .module('projectApp')
  .directive('googleMap', googleMap);

function googleMap() {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="map">GOOGLE MAP HERE</div>',
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
      }


    }
  };
}
