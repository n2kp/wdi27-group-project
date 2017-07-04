const request = require('request-promise');
const moment = require('moment');

function events(req, res) {
  const baseUrl = 'https://www.eventbriteapi.com/v3';
  // const dateStart = new Date();
  // const dateEnd = new Date( dateStart );
  // dateEnd.setHours = ( dateStart.getHours() + 3);

  request({
    method: 'GET',
    url: `${baseUrl}/events/search`,
    qs: {
      price: 'free',
      categories: 102,
      'location.latitude': req.query.lat,
      'location.longitude': req.query.lng,
      'location.within': '15km',
      expand: 'venue',
      token: process.env.EVENTBRITE_API_KEY
    },
    json: true
  })
  .then((response) => {
    res.status(200).json(response.events);
  })
  .catch((err) => {
    res.status(500).json(err);
  });
}

module.exports = {
  events
};
