// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = require("../database/Sequelize.database");

// const ProjectTasks = sequelize.define(
//     'ProjectTasks',
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             primaryKey: true,
//             allowNull: false,
//             autoIncrement: true,
//         },
//         projectId: {
//             type: DataTypes.INTEGER,
//             references: {
//                 model: 'Projects',
//                 key: 'id'
//             },
//             onUpdate: 'CASCADE',
//             onDelete: 'SET NULL',
//         },
//         taskId:{
//             type: DataTypes.INTEGER,
//             references: {
//                 model: 'Tasks',
//                 key: 'id'
//             },
//             onUpdate: 'CASCADE',
//             onDelete: 'SET NULL',
//         },
//     },
// );

// module.exports = ProjectTasks;
