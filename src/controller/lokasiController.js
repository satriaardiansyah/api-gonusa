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

const getAllLokasiHome = async (req, res) => {
    try {
        const [data] = await LokasiModel.getAllLokasiHome();

        res.json({
            message: "Get all lokasi home data success",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error,
        })
    }
}

const searchLokasi = async (req, res) => {
    const {namaLokasi} = req.params;

    try {
        const [data] = await LokasiModel.searchLokasi(namaLokasi);

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
                message: "Data not found1",
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
            message: 'CREATE new lokasi success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error cuyyy',
            serverMessage: error,
        })
    }
}


// const updateLokasiAsync = async (req, res) => {
//     const {idLokasi} = req.params;
//     const {body} = req;
//     try {
//         await LokasiModel.updateLokasi(body, idLokasi);
//         res.json({
//             message: 'UPDATE lokasi success',
//             data: {
//                 id: idLokasi,
//                 ...body
//             },
//         })
//     } catch (error) {
//         res.status(500).json({
//             message: 'Server Error',
//             serverMessage: error,
//         })
//     }
// }

const updateLokasi = async (req, res) => {
    const {idLokasi} = req.params;
    const {body} = req;
    try {
        await LokasiModel.updateLokasi(body, idLokasi);
        res.json({
            message: 'UPDATE lokasi success',
            data: {
                id: idLokasi,
                ...body
            },
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const deleteLokasi = async (req, res) => {
    const {idLokasi} = req.params;
    try {
        await LokasiModel.deleteLokasi(idLokasi);
        res.json({
            message: "DELETE lokasi success",
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}


module.exports = {
    getAllLokasi,
    getDetailLokasi,
    createNewLokasi,
    getAllLokasiHobby,
    updateLokasi,
    deleteLokasi,
    getAllLokasiHome,
    searchLokasi,
}