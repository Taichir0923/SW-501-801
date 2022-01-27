const express = require('express');
const route = express.Router();
const animeController = require('../controllers/anime');
const middleware = require('../middleware/auth');

route.post('/new-anime', middleware.isAuthenticated , animeController.createAnime);
route.get('/animes' , animeController.allAnimes)

module.exports = route;