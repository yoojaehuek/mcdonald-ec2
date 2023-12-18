const express = require('express');
const router = express.Router();
const StoreController = require('../controllers/storeController.js');

router.post('/', StoreController.createStore);
router.get('/', StoreController.getAllStore);
router.get('/mcdelivery', StoreController.getMcdelivery);

module.exports = router;