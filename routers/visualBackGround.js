const express = require('express');
const router = express.Router();
const SubCategory = require('../database/schemas/subCategory');
const { Op } = require('sequelize');

router.get('/:subcategory', async (req, res, next) => {
  try {
    console.log("req.params", req.params);
    const subcategory = req.params.subcategory;
    console.log("진입: ", subcategory);
    const result = await SubCategory.findOne({
      attributes: ['h_title', 'h_content', 'h_background_img_url', 'h_link'],
      where: {
        [Op.or]: [
          {id: subcategory},
          {type: subcategory},
        ]
      }
    })
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }

});

module.exports = router;
