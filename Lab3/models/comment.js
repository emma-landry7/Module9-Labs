const { Model, DataTypes } = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Comment extends Model {}

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        required: true,
    },
    postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        required: true,
    },
    commentText: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
    }},
    {
        sequelize: sequelizeInstance,
        modelName: 'comments',
        timestamps: true,
        freezeTableName: true
    }
);

module.exports = Comment;