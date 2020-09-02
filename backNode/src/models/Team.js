const { Model, DataTypes } = require('sequelize');

 class Team extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            location: DataTypes.STRING,
        },
        {
            sequelize: connection,
            tableName: 'teams',
        })
    }

    static associate(models) {
        this.belongsToMany(models.User, { foreignKey: 'teams_id', through: 'user_teams', as: 'users' });
    }
 }

 module.exports = Team;