const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const refresh = require('./refresh');

router.post('/join', UserController.createUser);
router.post('/login', UserController.loginUser);
// router.get('/one', refresh, UserController.detailUser);
router.patch('/', refresh, UserController.putUser);
router.delete('/', refresh, UserController.deleteUser);

router.get('/one', UserController.detailUser);
// router.patch('/', UserController.putUser);
// router.delete('/', UserController.deleteUser);

module.exports = router;
