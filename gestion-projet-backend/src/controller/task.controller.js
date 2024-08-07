var Task = require("../models/Task.model");
var TaskStatus = require("../models/TaskStatus.model")

const find = async (req, res, next) => {
    res.data = await Task.findAll({
        include: [TaskStatus]
    });
    next();
};

const createOne = async (req, res, next) => {
    try {
        var task = await Task.create(req.body);
        res.data = task;
        res.message = `Task ${task.id} created`;
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
        var task = await Task.update( req.body,
            {
                where: {
                    id: id,
                },
                individualHooks: true
            },
        );
        res.data = task;
        res.message = `Task ${id} updated`;
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
        var task = await Task.destroy({
            where: {
                id: id,
            }
        });
        res.data = task;
        res.message = `Task ${id} deleted`;
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