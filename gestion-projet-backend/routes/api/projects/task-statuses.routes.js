var express = require('express');
var router = express.Router();

var controller = require('../../../src/controller/task-status.controller')

router.get('/task-statuses',
    controller.find
);

router.post('/task-status',
    controller.createOne
);

router.put('/task-status/:id',
    controller.updateOne
);

router.delete('/task-status/:id',
    controller.deleteOne
);

module.exports = router;
