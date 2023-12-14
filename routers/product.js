const express = require('express');
const router = express.Router();
const  Product = require('../database/schemas/product');

router.get('/', async (req, res) => {
  try {
    // const products = await Product.findAll();
    const products = [
      {
        sub_category_id: 1, 
        product_category: 1,
        k_name: "치즈버거", 
        e_name: "cheeseburger", 
        thumbnail_img_url: "이미지 저장 경로", 
        seq: 1, 
        description: "상품설명", 
        sale_start_time: "00:00", 
        sale_end_time: "24:00", 
        price: "12000",
        llergen_information: "알레르기정보",
        cuntry_of_origin: "원산지 정보",
      },
      {
        sub_category_id: 1, 
        product_category: 1,
        k_name: "치즈버거", 
        e_name: "cheeseburger", 
        thumbnail_img_url: "이미지 저장 경로", 
        seq: 1, 
        description: "상품설명", 
        sale_start_time: "00:00", 
        sale_end_time: "24:00", 
        price: "12000",
        llergen_information: "알레르기정보",
        cuntry_of_origin: "원산지 정보",
      },
      {
        sub_category_id: 1, 
        product_category: 1,
        k_name: "치즈버거", 
        e_name: "cheeseburger", 
        thumbnail_img_url: "이미지 저장 경로", 
        seq: 1, 
        description: "상품설명", 
        sale_start_time: "00:00", 
        sale_end_time: "24:00", 
        price: "12000",
        llergen_information: "알레르기정보",
        cuntry_of_origin: "원산지 정보",
      },
    ]
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: '서버 에러.' });
	}
});


router.get('/:id', async (req, res) => {
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


router.get('/subcategory/:id', async (req, res) => {
  const categoryId = req.params.id;
  console.log("product/:id 진입: ", categoryId);

  try {
    const products = await Product.findAll({
      where: {
        sub_category_id: categoryId,
      },
    });

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: '서버 에러.' });
  }
});



module.exports = router;
