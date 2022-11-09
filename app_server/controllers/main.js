const fs = require('fs')
const news = JSON.parse(fs.readFileSync('./data/news.json', 'utf8'));

const index = (req, res) => {
  res.render('index', {title: 'Travlr Getaways', selected_home: true, news});
};

module.exports = {
  index
}