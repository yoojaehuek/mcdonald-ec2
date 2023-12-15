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
  console.log("query: ", query);
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
    res.status(200).json({mcdelivery: result});
    // res.json(result);
  } catch (error) {
    console.error('에러.:', error);
    res.status(500).json({ error: '서버 에러.' });
  }
});

module.exports = router;