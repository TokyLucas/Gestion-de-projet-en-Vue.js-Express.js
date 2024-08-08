const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../database/Sequelize.database");

var User = require("../models/User.model");

const UserRole = sequelize.define(
    'UserRole',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Nom requis"
                },
                notEmpty: {
                    msg: "Nom requis"
                },
            }
        }
    },
);

module.exports = UserRole;