const UsersModel = require('../models/users');

const getAllUsers = async (req, res) => {
    try {
        const [data] = await UsersModel.getAllUsers();

        res.json({
            message: 'GET all users success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }

    
}

const registerUsers = async (req, res) => {
    const {body} = req;

    //Contoh validasi
    if(!body.email || !body.name || !body.password){
        return res.status(400).json({
            message: 'Data tidak lengkap',
            data: null,
        })
    }
    
    try {
        await UsersModel.registerUsers(body);
        res.status(201).json({
            message: 'CREATE new users success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}


const loginUsers = async (req, res) => {
    const { body } = req;

    // Contoh validasi
    if (!body.email || !body.password) {
        return res.status(400).json({
            message: 'Email dan password harus diisi',
            data: null,
        });
    }

    try {
        const [userData] = await UsersModel.loginUsers(body);

        if (!userData || userData.length === 0) {
            return res.status(401).json({
                message: 'Login failed. Email atau password salah.',
                data: null,
            });
        }

        res.status(200).json({
            message: 'Login success',
            data: userData,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        });
    }
};

const logoutUsers = async (req, res) => {
    res.status(200).json({
        message: 'Logout success',
        data: null,
    });
};


const updateUser = async (req, res) => {
    const {idUser} = req.params;
    const {body} = req;
    try {
        await UsersModel.updateUser(body, idUser);
        res.json({
            message: 'UPDATE user success',
            data: {
                id: idUser,
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


const deleteUser = async (req, res) => {
    const {idUser} = req.params;
    try {
        await UsersModel.deleteUser(idUser)
        res.json({
            message: "DELETE user success",
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
    getAllUsers,
    registerUsers,
    updateUser,
    deleteUser,
    loginUsers,
    logoutUsers,
}