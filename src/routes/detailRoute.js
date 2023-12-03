const express = require('express');

const detailController = require('../controller/detailController');

const router = express.Router();

router.get('/', detailController.getAllDetailData);

router.get('/:idDetail', detailController.getDetailData);

module.exports = router;

