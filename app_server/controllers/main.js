const index = (req, res) => {
  res.render('index', {title: 'Travlr Getaways', selected_home: true});
};

module.exports = {
  index
}