const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
}

/* render news list view */
const renderNewsList = (req, res, responseBody) => {
  let message = null;
  let pageTitle = 'Travlr Getaways' + ' - News';

  if (!(responseBody instanceof Array)) {
    message = 'API lookup error';
    reponseBody = [];
  } else {
    if (!responseBody.length) {
      message = "No news exist in the database"
    }
  }

  res.render('news', {
    title: pageTitle,
    news: responseBody,
    selected_news: true,
    message
  });
}

/* GET news list view */
const newsList = (req, res) => {
  const path = '/api/news';
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'GET',
    json: {}
  };

  console.info('>> newsController.newsList calling ' + requestOptions.url);

  request(
    requestOptions,
    (err, { statusCode }, body) => {
      if (err) {
        console.error(err);
      }
      renderNewsList(req, res, body);
    }
  )
}

module.exports = {
  newsList
}