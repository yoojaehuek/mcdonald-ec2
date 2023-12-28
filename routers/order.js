const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/orderController');
const refresh = require('./refresh');


// router.post('/', refresh, OrderController.addOrder);
router.get('/all', OrderController.getAllOrder);
router.get('/', refresh, OrderController.getOrderByUserId);
// router.get('/date', refresh, OrderController.findAllOrderDate);
// router.get('/:order_id', refresh, OrderController.getOrderByOrderId);
router.get('/rank', OrderController.rankMenu);
// router.patch('/:order_id', OrderController.updateOrder);
router.delete('/:order_id', OrderController.deleteOrder);

//테스트용 로그인 안해도 가능
router.post('/', OrderController.addOrder);
// router.get('/', OrderController.getOrderByUserId);
router.get('/date', OrderController.findAllOrderDate);
router.get('/:order_id', OrderController.getOrderByOrderId);
router.patch('/:order_id', OrderController.updateOrder);
router.delete('/:order_id', OrderController.deleteOrder);

module.exports = router;