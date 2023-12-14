const express = require('express');
const router = express.Router();
const WhatsNew = require('../database/schemas/whatsNew');

router.get('/', async (req, res) => {
  try {
    const result = await WhatsNew.findAll();
    res.json(result);
  } catch (error) {
    console.error('에러.:', error);
    res.status(500).json({ error: '서버 에러.' });
  }
});

router.get('/subcategory/:subcategory_id', async (req, res) => {
  try {
    const categoryId = req.params.subcategory_id;
    const result = await WhatsNew.findAll({
      where: {
        sub_category_id: categoryId,
      }
    });
    res.json(result);
  } catch (error) {
    console.error('에러.:', error);
    res.status(500).json({ error: '서버 에러.' });
  }
});

module.exports = router;