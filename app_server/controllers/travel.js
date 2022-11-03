const travel = (req, res) => {
  pageTitle = 'Travlr Getaways' + ' - Travel';
  res.render('travel', {title: pageTitle, selected_travel: true});
};

module.exports = {
  travel
}