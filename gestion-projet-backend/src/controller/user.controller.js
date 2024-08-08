var User = require("../models/User.model");
var UserRole = require("../models/UserRole.model");
var sequelize = require("../database/Sequelize.database");

var jwt = require('jsonwebtoken');
var hash = require("../helpers/hash.helpers").hash;

const login = async (req, res, next) => {
    try {
        var { email, password } = req.body;

        var compte = await User.findOne({
            where: {
                email: email,
                password: hash(password)
            },
            include: UserRole,
            attributes: { exclude: ['password'] }
        });

        if (!compte) throw new Error("Email ou mot de passe invalide");
        var token = jwt.sign(compte.dataValues, process.env.JWT_KEY, { expiresIn: "1h"});

        res.data = {
            token: token,
            data: compte.dataValues
        }
    } catch (error) {
        res.statusCode = 500;
        res.message = error.message;
    } finally {
        next();
    }
};

const find = async (req, res, next) => {
    var paginateOptions = req.paginateOptions;
    res.data = await User.findAll({
        include: UserRole,
        attributes: { exclude: ['password'] },
        offset: paginateOptions.skip, limit: paginateOptions.limit
    });
    next();
};

const createOne = async (req, res, next) => {
    try {
        const transaction = await sequelize.transaction();
        var user = await User.create(
            req.body,
            { 
                transaction: transaction
            },
        );

        res.data = user;
        res.transaction = transaction;
        res.message = `User ${user.id} created`;
    } catch (error) {
        res.statusCode = 500;
        res.message = error.message;
    } finally {
        next();
    }
};

const updateOne = async (req, res, next) => {
    try {
        var {id} = req.params;
        var user = await User.update( req.body,
            {
                where: {
                    id: id,
                },
                individualHooks: true
            },
        );
        res.data = user;
        res.message = `User ${id} updated`;
    } catch (error) {
        res.statusCode = 500;
        res.message = error.message;
    } finally {
        next();
    }
};

const deleteOne = async (req, res, next) => {
    try {
        var {id} = req.params;
        var user = await User.destroy({
            where: {
                id: id,
            }
        });
        res.data = user;
        res.message = `User ${id} deleted`;
    } catch (error) {
        res.statusCode = 500;
        res.message = error.message;
    } finally {
        next();
    }
};

module.exports.login = login;

module.exports.find = find;
module.exports.createOne = createOne;
module.exports.updateOne = updateOne;
module.exports.deleteOne = deleteOne;