const express = require('express');
const UserController = require('./controllers/UserController');
const TeamController = require('./controllers/TeamController');
const routes = express.Router();

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

routes.post('/team', TeamController.store);
routes.get('/team', TeamController.index);

routes.post('/users/:user_id/team/:team_id', TeamController.postTeam);
routes.get('/users/:user_id/team', TeamController.getTeam);


module.exports = routes;