angular
.module('projectApp')
.constant('mapStyles', [
  {
    'featureType': 'landscape.natural',
    'elementType': 'geometry.fill',
    'stylers': [
      {
        'visibility': 'on'
      },
      {
        'color': '#48A15D'
      }
    ]
  },
  {
    'featureType': 'poi',
    'elementType': 'geometry.fill',
    'stylers': [
      {
        'visibility': 'on'
      },
      {
        'hue': '#1900ff'
      },
      {
        'color': '#48A15D'
      }
    ]
  },
  {
    'featureType': 'road',
    'elementType': 'geometry',
    'stylers': [
      {
        'lightness': 100
      },
      {
        'visibility': 'simplified'
      }
    ]
  },
  {
    'featureType': 'road',
    'elementType': 'labels',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'featureType': 'transit.line',
    'elementType': 'geometry',
    'stylers': [
      {
        'visibility': 'on'
      },
      {
        'lightness': 700
      }
    ]
  },
  {
    'featureType': 'water',
    'elementType': 'all',
    'stylers': [
      {
        'color': '#1792AE'
      }
    ]
  }
]);
