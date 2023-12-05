const express = require('express');
const router = express.Router();
const Crew = require('../database/schemas/crew');

router.get('/', async (req, res) => {
  try {
    const crews = await Crew.findAll();
    res.json(crews);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('서버에러.');
  }
});

module.exports = router;
