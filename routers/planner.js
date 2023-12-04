const express = require('express');
const router = express.Router();
const PlannerController = require('../controllers/plannerController');

router.get('/', PlannerController.getPlanner);


module.exports = router;