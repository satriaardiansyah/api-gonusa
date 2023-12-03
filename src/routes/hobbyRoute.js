const express = require('express');
const hobbyController = require('../controller/hobbyController')

const router = express.Router();


router.get('/', hobbyController.getAllHobby);

module.exports = router;