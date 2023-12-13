const express = require('express');
const router = express.Router();
const Slider = require('../database/schemas/slider');

router.get('/', async (req, res) => {
  try {
    const result = await Slider.findAll();
    res.json(result);
  } catch (error) {
    console.error('에러.:', error);
    res.status(500).json({ error: '서버 에러.' });
  }
});

module.exports = router;