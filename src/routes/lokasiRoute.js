const express = require('express');

const lokasiController = require('../controller/lokasiController');

const router = express.Router();

router.get('/', lokasiController.getAllLokasi);

router.get('/:hobby', lokasiController.getAllLokasiHobby);

router.post('/', lokasiController.createNewLokasi);

router.get('/:idLokasi', lokasiController.getDetailLokasi);

module.exports = router;