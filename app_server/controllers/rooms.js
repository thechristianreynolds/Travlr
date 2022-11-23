const request = require('request');
const apiOptions = {
  server: 'http://localhost:3000'
}

/* render room list view */
const renderRoomList = (req, res, responseBody) => {
  let message = null;
  let pageTitle = 'Travlr Getaways' + ' - Rooms';

  if (!(responseBody instanceof Array)) {
    message = 'API lookup error';
    reponseBody = [];
  } else {
    if (!responseBody.length) {
      message = "No rooms exist in the database"
    }
  }

  res.render('rooms', {
    title: pageTitle,
    rooms: responseBody,
    selected_rooms: true,
    message
  });
}

/* GET room list view */
const roomList = (req, res) => {
  const path = '/api/rooms';
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'GET',
    json: {}
  };

  console.info('>> roomController.roomList calling ' + requestOptions.url);

  request(
    requestOptions,
    (err, { statusCode }, body) => {
      if (err) {
        console.error(err);
      }
      renderRoomList(req, res, body);
    }
  )
}

// const rooms = (req, res) => {
//   pageTitle = 'Travlr Getaways' + ' - Rooms';
//   res.render('rooms', {title: pageTitle, selected_rooms: true, roomsJSON});
// };

// module.exports = {
//   rooms
// }

module.exports = {
  roomList
}