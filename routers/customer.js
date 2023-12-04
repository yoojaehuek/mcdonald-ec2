const express = require('express');
const router = express.Router();
const FAQ = require('../database/schemas/faq');

router.get('/', async (req, res) => {
  try {
    const faqs = await FAQ.findAll();
    res.json(faqs);
  } catch (error) {
    console.error('에러.:', error);
    res.status(500).json({ error: '서버 에러.' });
  }
});

module.exports = router;

//어려워요.