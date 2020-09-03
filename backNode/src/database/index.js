const Sequelize = require('sequelize');
const Config = require('../config');
const dbConfig = Config.getConfig();

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
