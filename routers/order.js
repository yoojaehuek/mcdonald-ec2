const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/orderController');
const refresh = require('./refresh');

router.post('/', refresh, OrderController.addOrder);
// router.post('/', OrderController.addOrder);
router.get('/', refresh, OrderController.getOrderByUserId);
// router.get('/mypage', authJWT, UserController.)

module.exports = router;