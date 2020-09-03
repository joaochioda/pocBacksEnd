const { Model, DataTypes } = require('sequelize');

 class Color extends Model {
    static init(connection) {
        super.init({
            color: DataTypes.STRING,
        },
        {
            sequelize: connection,
        })
    }

 }

 module.exports = Color;