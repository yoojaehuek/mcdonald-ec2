const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/orderController');
const refresh = require('./refresh');


router.post('/', refresh, OrderController.addOrder);
router.get('/', refresh, OrderController.getOrderByUserId);
router.get('/date', refresh, OrderController.findAllOrderDate);
router.get('/', refresh, OrderController.getOrderByUserId);
router.delete('/:order_id', refresh, OrderController.deleteOrder);

//테스트용 로그인 안해도 가능
// router.post('/', OrderController.addOrder);
// router.get('/', OrderController.getOrderByUserId);
// router.get('/date', OrderController.findAllOrderDate);
// router.delete('/:order_id', OrderController.deleteOrder);


module.exports = router;