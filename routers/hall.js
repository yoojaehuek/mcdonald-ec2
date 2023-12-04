const express = require('express');
const router = express.Router();
const HallController = require('../controllers/hallController');

router.get('/', HallController.getHall);

module.exports = router;