const request = require('request-promise');


function news(req, res) {
  const baseUrl = 'https://newsapi.org/v1';


  request({
    method: 'GET',
    url: `${baseUrl}/articles`,
    qs: {
      source: 'techcrunch',
      apiKey: process.env.NEWS_API_KEY
    },
    json: true
  })
  .then((response) => {
    res.status(200).json(response.articles);
  })
  .catch((err) => {
    res.status(500).json(err);
  });
}

module.exports = {
  news
};
