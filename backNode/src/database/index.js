const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Team = require('../models/Team');
const Color = require('../models/Color');

const connection = new Sequelize(dbConfig);

User.init(connection);
Team.init(connection);
Color.init(connection);

User.associate(connection.models);
Team.associate(connection.models);

module.exports = connection;