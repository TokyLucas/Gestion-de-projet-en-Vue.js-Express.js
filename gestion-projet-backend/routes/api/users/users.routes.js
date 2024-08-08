var express = require('express');
var router = express.Router();

var controller = require('../../../src/controller/user.controller')
var paginate = require('../../../src/middlewares/paginate.middleware')
var transaction = require('../../../src/middlewares/transaction.middleware')
var jwtAuth = require("../../../src/middlewares/jwt-auth.middleware");

router.post('/login',
    controller.login
);

router.get('/users',
    paginate.paginate,
    controller.find
);

router.post('/user',
    jwtAuth(["admin"]),
    controller.createOne,
    transaction.handleTransaction
);

router.put('/user/:id',
    jwtAuth(["admin"]),
    controller.updateOne
);

router.delete('/user/:id',
    jwtAuth(["admin"]),
    controller.deleteOne
);

module.exports = router;
