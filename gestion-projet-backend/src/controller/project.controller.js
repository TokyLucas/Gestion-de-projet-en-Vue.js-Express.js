var Project = require("../models/Project.model");
var Task = require("../models/Task.model");
var TaskStatus = require("../models/TaskStatus.model");

const find = async (req, res, next) => {
    res.data = await Project.findAll({ include: { all: true, nested: true }});
    next();
};

const createOne = async (req, res, next) => {
    try {
        var project = await Project.create(req.body);
        res.data = project;
        res.message = `Project ${project.id} created`;
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
        var project = await Project.update( req.body,
            {
                where: {
                    id: id,
                },
                individualHooks: true
            },
        );
        res.data = project;
        res.message = `Project ${id} updated`;
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
        var project = await Project.destroy({
            where: {
                id: id,
            }
        });
        res.data = project;
        res.message = `Project ${id} deleted`;
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