const express = require('express');
const UserController = require('../controller/users.js');

const router = express.Router();

//Create dengan method post
router.post('/', UserController.createNewUsers);

// Read dengan methood get
router.get('/', UserController.getAllUsers);

// update dengan method patch
router.patch('/:idUser', UserController.updateUser);

// Delete dengan method delete
router.delete('/:idUser', UserController.deleteUser);


module.exports = router;