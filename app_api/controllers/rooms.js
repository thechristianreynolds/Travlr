const mongoose = require('mongoose');
const Model = mongoose.model('rooms');

// GET: /rooms - list all rooms
const roomsList = async(req, res) => {
    Model
        .find({}) // returns all
        .exec((err, rooms) => {
            if (!rooms) {
                return res
                    .status(404)
                    .json({"message": "rooms not found"});
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(rooms);
            }
        });
};

// GET: /rooms/:roomCode - returns a single room
const roomsFindCode = async(req, res) => {
    Model
        .find({'code': req.params.roomCode})
        .exec((err, room) => {
            if (!room) {
                return res
                    .status(404)
                    .json({"message": "room not found"});
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(room)
            }
        });
};

module.exports = {
    roomsList,
    roomsFindCode
};