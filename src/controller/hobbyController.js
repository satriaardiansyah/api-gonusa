const HobbyModel = require('../models/hobbyModel');

const getAllHobby = async (req, res) => {
    try {
        const [data] = await HobbyModel.getAllHobby();

        res.json({
            message: 'GET all hobby success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }

    
}

module.exports = {
    getAllHobby,
}