var express = require('express');
var router = express.Router();

var controller = require('../../../src/controller/project.controller')

router.get('/projects',
    controller.find
);

router.post('/project',
    controller.createOne
);

router.put('/project/:id',
    controller.updateOne
);

router.delete('/project/:id',
    controller.deleteOne
);

module.exports = router;
