const meals = (req, res) => {
  pageTitle = 'Travlr Getaways' + ' - Meals';
  res.render('meals', {title: pageTitle, selected_meals: true});
};

module.exports = {
  meals
}