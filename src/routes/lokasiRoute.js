const express = require('express');

const lokasiController = require('../controller/lokasiController');

const router = express.Router();

router.get('/', lokasiController.getAllLokasiHome);

router.get('/all', lokasiController.getAllLokasi);

router.get('/:hobby', lokasiController.getAllLokasiHobby);

router.post('/', lokasiController.createNewLokasi);

router.get('/:idLokasi', lokasiController.getDetailLokasi);

router.patch('/:idLokasi', lokasiController.updateLokasi);

router.delete('/:idLokasi', lokasiController.deleteLokasi);


module.exports = router;