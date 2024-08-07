const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../database/Sequelize.database");

const Task = require("./Task.model")

const Project = sequelize.define(
    'Project',
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
                }
            }
        },
        description: {
            type: DataTypes.STRING,
        },
    },
);

Project.hasMany(Task, {
    onDelete: 'cascade',
});
Task.belongsTo(Project, {
    onDelete: 'cascade',
});

module.exports = Project;