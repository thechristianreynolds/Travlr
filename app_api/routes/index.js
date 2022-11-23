const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');
const roomsController = require('../controllers/rooms');
const mealsController = require('../controllers/meals');
const newsController = require('../controllers/news');

router
    .route('/trips')
    .get(tripsController.tripsList);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindCode);

router
    .route('/rooms')
    .get(roomsController.roomsList);

router
    .route('/rooms/:roomCode')
    .get(roomsController.roomsFindCode);

router
    .route('/meals')
    .get(mealsController.mealsList);

router
    .route('/meals/:mealCode')
    .get(mealsController.mealsFindCode);

router
    .route('/news')
    .get(newsController.newsList);

router
    .route('/news/:newsCode')
    .get(newsController.newsFindCode);

module.exports = router;
