var express = require('express');
var router = express.Router();

var controller = require('../../../src/controller/userRole.controller')

router.get('/user-role',
    controller.find
);

router.post('/user-role',
    controller.createOne
);

router.put('/user-role/:id',
    controller.updateOne
);

router.delete('/user-role/:id',
    controller.deleteOne
);

module.exports = router;
