const news = (req, res) => {
  pageTitle = 'Travlr Getaways' + ' - News';
  res.render('news', {title: pageTitle, selected_news: true});
};

module.exports = {
  news
}