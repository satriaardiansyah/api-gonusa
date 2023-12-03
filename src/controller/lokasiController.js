const LokasiModel = require('../models/lokasiModel');

const getAllLokasi = async (req, res) => {
    try {
        const [data] = await LokasiModel.getAllLokasi();

        res.json({
            message: "Get all lokasi data success",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error,
        })
    }
}

const getAllLokasiHobby = async (req, res) => {
    const {hobby} = req.params;

    try {
        const [data] = await LokasiModel.getAllLokasiHobby(hobby);

        if (data.length === 0) {
            //handle jika data tidak ditemukan
            return res.status(404).json({
                message: "Data not found",
            });
        }

        res.json({
            message: "Get detail data success",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const getDetailLokasi = async (req, res) => {
    const {idLokasi} = req.params;

    try {
        const [data] = await LokasiModel.getDetailLokasi(idLokasi);

        if (data.length === 0) {
            //handle jika data tidak ditemukan
            return res.status(404).json({
                message: "Data not found",
            });
        }

        res.json({
            message: "Get detail data success",
            data: {
                id: data
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const createNewLokasi = async (req, res) => {
    const {body} = req;

    try {
        await LokasiModel.createNewLokasi(body);
        res.status(201).json({
            message: 'CREATE new users success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error cuyyy',
            serverMessage: error,
        })
    }
}

module.exports = {
    getAllLokasi,
    getDetailLokasi,
    createNewLokasi,
    getAllLokasiHobby,
}