const express = require('express');

const lokasiController = require('../controller/lokasiController');

const router = express.Router();

router.get('/', lokasiController.getAllLokasiHome);

router.get('/all', lokasiController.getAllLokasi);

router.get('/hobby/:hobby', lokasiController.getAllLokasiHobby);

router.get('/search/:namaLokasi', lokasiController.searchLokasi);

router.post('/add', lokasiController.createNewLokasi);

router.get('/:idLokasi', lokasiController.getDetailLokasi);

router.patch('/:idLokasi', lokasiController.updateLokasi);

router.delete('/:idLokasi', lokasiController.deleteLokasi);


module.exports = router;