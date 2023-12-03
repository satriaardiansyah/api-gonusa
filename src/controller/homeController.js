const HomeModel = require('../models/homeModel');

const getAllData = async (req, res)=> {
    try {
        const [data] = await HomeModel.getAllData();

        res.json({
            message: 'Get all data home success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error,
        })
    }
}

module.exports = {
    getAllData,
}