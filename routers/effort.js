const express = require('express');
const router = express.Router();
const Effort = require('../database/schemas/Effort');

router.get('/', async (req, res) => {
  try {
    const efforts = await Effort.findAll();
    res.json(efforts);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
