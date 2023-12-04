const express = require('express');
const router = express.Router();
const  Product = require('../database/schemas/product');

router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: '서버 에러.' });
	}
});


router.get('/detail/:id', async (req, res) => {
  console.log("req.params", req.params);
  const _productId = req.params.id;
  console.log("product/:productId 진입: ", _productId);

  try {
    const product = await Product.findOne({
      where: {
        id: _productId,
      },
    });

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: '서버 에러.' });
  }
});


router.get('/:id', async (req, res) => {
  const categoryId = req.params.id;
  console.log("product/:id 진입: ", categoryId);

  try {
    const products = await Product.findAll({
      where: {
        category: categoryId,
      },
    });

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: '서버 에러.' });
  }
});



module.exports = router;
