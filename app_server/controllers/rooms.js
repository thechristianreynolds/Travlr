const rooms = (req, res) => {
  pageTitle = 'Travlr Getaways' + ' - Rooms';
  res.render('rooms', {title: pageTitle, selected_rooms: true});
};

module.exports = {
  rooms
}