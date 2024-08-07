var TaskStatus = require("../models/TaskStatus.model");

const find = async (req, res, next) => {
    res.data = await TaskStatus.findAll();
    next();
};

const createOne = async (req, res, next) => {
    try {
        var taskStatus = await TaskStatus.create(req.body);
        res.data = taskStatus;
        res.message = `TaskStatus ${taskStatus.id} created`;
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
        var taskStatus = await TaskStatus.update( req.body,
            {
                where: {
                    id: id,
                },
                individualHooks: true
            },
        );
        res.data = taskStatus;
        res.message = `TaskStatus ${id} updated`;
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
        var taskStatus = await TaskStatus.destroy({
            where: {
                id: id,
            }
        });
        res.data = taskStatus;
        res.message = `TaskStatus ${id} deleted`;
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