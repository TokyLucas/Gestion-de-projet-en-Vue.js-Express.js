const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../database/Sequelize.database");

const User = require("./User.model");
const TaskStatus = require("./TaskStatus.model");

const Task = sequelize.define(
    'Task',
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
        },
        description: {
            type: DataTypes.STRING,
        }
    },
);

User.associate = (models) => {
    User.hasOne(models.Task, {
        onDelete: 'cascade',
        foreignKey: { allowNull: false }
    });
};
Task.belongsTo(User, {
    onDelete: 'cascade',
    foreignKey: {
        name: 'pid_person',
        allowNull: false
    }
});

TaskStatus.associate = (models) => {
    TaskStatus.hasOne(models.Task, {
        onDelete: 'cascade',
        foreignKey: { allowNull: false }
    });
};
Task.belongsTo(TaskStatus, {
    onDelete: 'cascade',
    foreignKey: { allowNull: false }
});

module.exports = Task;
