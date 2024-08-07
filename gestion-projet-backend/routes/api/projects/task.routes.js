var express = require('express');
var router = express.Router();

var controller = require('../../../src/controller/task.controller')

router.get('/tasks',
    controller.find
);

router.post('/task',
    controller.createOne
);

router.put('/task/:id',
    controller.updateOne
);

router.delete('/task/:id',
    controller.deleteOne
);

module.exports = router;
