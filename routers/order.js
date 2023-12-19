const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/orderController');
const refresh = require('./refresh');
<<<<<<< HEAD
const { findAllOrderDate } = require('../services/orderService');


// router.post('/', refresh, OrderController.addOrder);
router.post('/', OrderController.addOrder);
// router.get('/', refresh, OrderController.getOrderByUserId);
router.get('/', OrderController.getOrderByUserId);
// router.get('/date', refresh, OrderController.findAllOrderMonth);
router.get('/date', OrderController,findAllOrderDate);
// router.get('/', refresh, OrderController.getOrderByUserId);
router.delete('/', OrderController.deleteOrder);

// router.get('/test', (req,res) => {
//   User.findAll({ include: [{ all: true }]})
//   .then(users => {
//     console.log(JSON.stringify(users))
//   });
// })
=======


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

>>>>>>> 64f7291fae52f9779fbee32ef3f65595ecceb33e

module.exports = router;