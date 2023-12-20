const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const refresh = require('./refresh');

router.post('/join', UserController.createUser);
router.post('/login', UserController.loginUser);
router.get('/one', refresh, UserController.detailUser);
<<<<<<< HEAD
// router.get('/one', UserController.detailUser);
router.patch('/update', refresh, UserController.putUser);
// router.patch('/update', UserController.putUser);
router.delete('/delete', refresh, UserController.deleteUser);
// router.get('/mypage', authJWT, UserController.)
=======
router.patch('/', refresh, UserController.putUser);
router.delete('/', refresh, UserController.deleteUser);

// router.get('/one', UserController.detailUser);
// router.patch('/', UserController.putUser);
// router.delete('/', UserController.deleteUser);
>>>>>>> 64f7291fae52f9779fbee32ef3f65595ecceb33e

module.exports = router;
