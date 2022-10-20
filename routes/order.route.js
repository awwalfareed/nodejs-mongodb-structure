const express = require('express');
const orderController= require('../controllers/order.controller')

const router = express.Router();

// router.get("/agggregate",individulaController.aggresult)
router.get("/order",orderController.createOrder)





module.exports = router;