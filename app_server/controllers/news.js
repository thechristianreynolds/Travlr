const fs = require('fs');
const newsJSON = JSON.parse(fs.readFileSync('./data/news.json', 'utf8'));

const news = (req, res) => {
  pageTitle = 'Travlr Getaways' + ' - News';
  res.render('news', {title: pageTitle, selected_news: true, newsJSON});
};

module.exports = {
  news
}