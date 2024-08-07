var UserRole = require("../models/UserRole.model");

const find = async (req, res, next) => {
    res.data = await UserRole.findAll();
    next();
};

const createOne = async (req, res, next) => {
    try {
        var userRole = await UserRole.create(req.body);
        res.data = userRole;
        res.message = `UserRole ${userRole.id} created`;
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
        var userRole = await UserRole.update( req.body,
            {
                where: {
                    id: id,
                },
                individualHooks: true
            },
        );
        res.data = userRole;
        res.message = `UserRole ${id} updated`;
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
        var userRole = await UserRole.destroy({
            where: {
                id: id,
            }
        });
        res.data = userRole;
        res.message = `UserRole ${id} deleted`;
    } catch (error) {
        res.statusCode = 500;
        res.message = error.message;
    } finally {
        next();
    }
};

module.exports.find = find;
module.exports.createOne = createOne;
module.exports.updateOne = updateOne;
module.exports.deleteOne = deleteOne;