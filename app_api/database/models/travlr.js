const mongoose = require('mongoose');

// define trip schema
const tripSchema = new mongoose.Schema({
  code: {type: String, required: true, index: true},
  name: {type: String, required: true, index: true},
  length: {type: String, required: true},
  start: {type: Date, required: true},
  resort: {type: String, required: true},
  perPerson: {type: String, required: true},
  image: {type: String, required: true},
  description: {type: String, required: true}
});
//mongoose.model('trips', tripSchema);

// define room schema
const roomSchema = new mongoose.Schema({
  code: {type: String, required: true, index: true},
  name: {type: String, required: true, index: true},
  rate: {type: String, required: true, index: true},
  image: {type: String, required: true},
  description: {type: String, required: true}
});

// define meal schema
const mealSchema = new mongoose.Schema({
  code: {type: String, required: true, index: true},
  category: {type: String, required: true, index: true},
  image: {type: String, required: true},
  overview: {type: String, required: true}
});

// define news schema
const newsSchema = new mongoose.Schema({
  code: {type: String, required: true, index: true},
  headline: {type: String, required: true, index: true},
  image: {type: String, required: false},
  datePublished: {type: String, required: true, index: true},
  author: {type: String, required: false, index: true},
  content: {type: String, required: true},
  tag: {type: String, required: true, index: true}
});

module.exports = mongoose.model('trips', tripSchema);
module.exports = mongoose.model('rooms', roomSchema);
module.exports = mongoose.model('meals', mealSchema);
module.exports = mongoose.model('news', newsSchema);