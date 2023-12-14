const express = require('express');
const UserController = require('../controller/users.js');

const router = express.Router();

//Create dengan method post
router.post('/register', UserController.registerUsers);

router.get('/:idUsers', UserController.getNameUser);

router.post('/login', UserController.loginUsers);

router.post('/logout', UserController.logoutUsers);

// Read dengan methood get
router.get('/', UserController.getAllUsers);

// update dengan method patch
router.patch('/:idUsers', UserController.updateUser);

// Delete dengan method delete
router.delete('/:idUsers', UserController.deleteUser);


module.exports = router;