const fs = require('fs');
const foods = JSON.parse(fs.readFileSync('./data/foods.json', 'utf8'));

const meals = (req, res) => {
  pageTitle = 'Travlr Getaways' + ' - Meals';
  res.render('meals', {title: pageTitle, selected_meals: true, foods});
};

module.exports = {
  meals
}