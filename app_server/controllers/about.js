const about = (req, res) => {
  pageTitle = 'Travlr Getaways' + ' - About';
  res.render('about', {title: pageTitle, selected_about: true});
};

module.exports = {
  about
}