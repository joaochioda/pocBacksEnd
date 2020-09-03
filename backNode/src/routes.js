const express = require('express');
const UserController = require('./controllers/UserController');
const TeamController = require('./controllers/TeamController');
const ColorController = require('./controllers/ColorController');
const routes = express.Router();

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.patch('/users/:id', UserController.update);
routes.get('/users/:id', UserController.getById);


routes.post('/team', TeamController.store);
routes.get('/team', TeamController.index);

routes.post('/color', ColorController.store);
routes.get('/color', ColorController.index);

routes.post('/users/:user_id/team/:team_id', TeamController.postTeam);
routes.get('/users/:user_id/team', TeamController.getTeam);


module.exports = routes;