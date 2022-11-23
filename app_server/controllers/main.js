const request = require('request');
const apiOptions = {
  server: 'http://localhost:3000'
}

// request news stories from the api
const index = (req, res) => {
  const path = '/api/news';
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'GET',
    json: {}
  };

  console.info('>> main.index calling ' + requestOptions.url);
  request(
    requestOptions,
    (err, { statusCode }, body) => {
      if (err) {
        console.error(err);
      }
      res.render('index', {
        title: 'Travlr Getaways',
        news: body,
        selected_home: true,
      });
    }
  )
  // res.render('index', {title: 'Travlr Getaways', selected_home: true, news});
};

module.exports = {
  index
}