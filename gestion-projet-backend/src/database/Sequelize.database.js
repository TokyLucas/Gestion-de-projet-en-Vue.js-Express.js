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
    console.log("[DB]", "CONNECTING DATABASE...");
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
        console.log("[DB]", "DATABASE CONNECTED");

        // Donnée de base de test
        (async () => {
            try {
                await UserRole.create({ "name": "admin" });
                await UserRole.create({ "name": "user" });
                await User.create({ 
                    "name": "admin",
                    "email": "admin@gmail.com",
                    "password": "admin",
                    "UserRoleId": 1
                });
                
                await TaskStatus.create({ "name": "A faire" });
                await TaskStatus.create({ "name": "En cours" });
                await TaskStatus.create({ "name": "Terminé" });
            } catch (error) {
                console.log("[DB]", "Data mockup already created");
            }
        })().finally( () => {
            console.log("[DB]", "Data mockup created");
        });

    });

}).catch( (error) => {
    console.log("[ERROR]", error);
});

module.exports = sequelize;