const fs = require('fs');
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

const travel = (req, res) => {
  pageTitle = 'Travlr Getaways' + ' - Travel';
  res.render('travel', {title: pageTitle, selected_travel: true, trips});
};

module.exports = {
  travel
}