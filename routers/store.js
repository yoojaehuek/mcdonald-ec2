const express = require('express');
const router = express.Router();
const Store = require('../database/schemas/store');
const { Op } = require('sequelize');

router.get('/', async (req, res) => {
  try {
    const result = await Store.findAll();
    res.json(result);
  } catch (error) {
    console.error('에러.:', error);
    res.status(500).json({ error: '서버 에러.' });
  }
});

router.get('/mcdelivery', async (req, res) => {
  const address = req.query.address;
  var elements = address.split(' ');
  var dong = elements[elements.length - 2]; 
  console.log("dong: ", dong);
  try {
    const result = await Store.findOne({
      where: {
        address: {
          [Op.like]: `%${dong}%`,
        }
      }
    }
    );
    console.log(result);
    let mcdelivery = true;
    if (result == null) {
      mcdelivery = false;
    }
    res.status(200).json({"mcdelivery": mcdelivery});
    // res.json(result);
  } catch (error) {
    console.error('에러.:', error);
    res.status(500).json({ error: '서버 에러.' });
  }
});

module.exports = router;