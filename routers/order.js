const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/orderController');
const refresh = require('./refresh');
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

module.exports = router;