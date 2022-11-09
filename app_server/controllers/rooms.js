const fs = require('fs')
const roomsJSON = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));

const rooms = (req, res) => {
  pageTitle = 'Travlr Getaways' + ' - Rooms';
  res.render('rooms', {title: pageTitle, selected_rooms: true, roomsJSON});
};

module.exports = {
  rooms
}