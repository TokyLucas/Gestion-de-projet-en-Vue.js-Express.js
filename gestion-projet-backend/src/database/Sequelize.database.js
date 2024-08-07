var Sequelize = require('sequelize');
var dotenv =  require('dotenv');

dotenv.config();

// Initialition d'instance Sequelize
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: "mysql",
        logging: false
    }
);

// Authentification
sequelize.authenticate().then(() => {
    console.log("CONNECTING DATABSE...");
    // Import des tables
    var UserRole = require("../models/UserRole.model");
    var User = require("../models/User.model");

    var TaskStatus = require("../models/TaskStatus.model");
    var Task = require("../models/Task.model");
    var Project = require("../models/Project.model");

    //  Synchronization de la base de données
    //  force: true si drop et recreéation des tables nécessaire
    (async () => {
        await sequelize.sync({ force: false });
    })().finally( () => {
        console.log("DATABASE CONNECTED");
    });
})

module.exports = sequelize;