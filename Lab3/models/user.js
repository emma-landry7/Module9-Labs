const { DataType, Model, DataTypes } = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
    }},
    {
        sequelize: sequelizeInstance,
        modelName: 'users',
        timestamps: true,
        freezeTableName: true
    }
);

module.exports = User;