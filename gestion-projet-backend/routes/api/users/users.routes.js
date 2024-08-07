var express = require('express');
var router = express.Router();

var controller = require('../../../src/controller/user.controller')
var transaction = require('../../../src/middlewares/transaction.middleware')

router.get('/login',
    controller.login
);

router.get('/users',
    controller.find
);

router.post('/user',
    controller.createOne,
    transaction.handleTransaction
);

router.put('/user/:id',
    controller.updateOne
);

router.delete('/user/:id',
    controller.deleteOne
);

module.exports = router;
