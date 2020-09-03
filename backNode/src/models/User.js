const { Model, DataTypes } = require('sequelize');

 class User extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            
        },
        {
            sequelize: connection,
        })
    }

    static associate(models) {
        this.belongsToMany(models.Team, { foreignKey: 'user_id', through: 'user_teams', as: 'teams' });
        this.belongsTo(models.Color, { foreignKey: 'color_id', as: 'colors' });
    }
 }

 module.exports = User;