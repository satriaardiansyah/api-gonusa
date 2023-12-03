const DetailModel = require('../models/detailModel');

const getAllDetailData = async (req, res) => {
    try {
        const [data] = await DetailModel.getAllDetailData();

        res.json({
            message: "Get all detail data success",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error cuy',
            serverMessage: error,
        })
    }
}

const getDetailData = async (req, res) => {
    const {idDetail} = req.params;

    try {
        const [data] = await DetailModel.getDetailData(idDetail);

        if (data.length === 0) {
            // Handle jika data tidak ditemukan
            return res.status(404).json({
              message: 'Data not found',
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

module.exports = {
    getAllDetailData,
    getDetailData,
}