const express = require('express');
const router = express.Router();
const VisualBackGround = require('../database/schemas/visualBackGround');
// const UserController = require('../controllers/userController');
// const refresh = require('./refresh');
// const { Product, ProductDetail, ProductSubImage } = require('./models');

// router.post('/login', UserController.loginUser);
// router.get('/mypage', refresh, UserController.detailUser);
// router.get('/mypage', authJWT, UserController.)
// router.get('/*', UserController.addUser);
router.get('/:location', async (req, res, next) => {
  try {
    console.log("req.params", req.params);
    const location = req.params.location;
    console.log("진입: ", location);
    const result = await VisualBackGround.findOne({
      where: {
        id: location,
      }
    })
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }

});

module.exports = router;
