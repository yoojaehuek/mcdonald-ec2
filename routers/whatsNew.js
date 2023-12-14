const express = require('express');
const router = express.Router();
const WhatsNew = require('../database/schemas/whatsNew');
const { Sequelize, Op } = require('sequelize');

router.get('/', async (req, res) => {
  try {
    const result = await WhatsNew.findAll({
      where: {
        [Op.or]: [
          {sub_category_id: 12},
          {sub_category_id: 14},
        ]
      }
    });
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
    if (result.length == 0) {
      console.log("없음");
      res.status(404).json({ error: "요청데이터 없음" });
    }else{
      res.status(200).json(result);
    }
  } catch (error) {
    console.error('에러.:', error);
    res.status(500).json({ error: '서버 에러.' });
  }
});

router.get('/:sub_category_id/:item_id', async (req, res) => {
  try {
    const sub_category_id = req.params.sub_category_id;
    const item_id = req.params.item_id;
    // console.log(sub_category_id, item_id);
    const result = await WhatsNew.findOne({
      where: {
        sub_category_id: sub_category_id,
        id:item_id,
      }
    });
    res.json(result);
  } catch (error) {
    console.error('에러.:', error);
    res.status(500).json({ error: '서버 에러.' });
  }
});

module.exports = router;