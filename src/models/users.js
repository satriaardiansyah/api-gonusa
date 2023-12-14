const dbPool = require('../config/db.js');

const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM users';
    
    return dbPool.execute(SQLQuery);
    
}

const getNameUser = (idUsers) => {
    const SQLQuery = `SELECT nameUsers from users WHERE idUsers='${idUsers}'`;

    return dbPool.execute(SQLQuery);
}

const registerUsers = (body) => {
    const SQLQuery = `INSERT INTO users (nameUsers, emailUsers, passwordUsers)
                      VALUE ('${body.name}', '${body.email}', '${body.password}')`;

    return dbPool.execute(SQLQuery);
}

const loginUsers = (body) => {
    const SQLQuery = `SELECT * FROM users 
                      WHERE emailUsers = '${body.email}' AND passwordUsers = '${body.password}'`;

    return dbPool.execute(SQLQuery);
}


const updateUser = (body, idUser) => {
    const SQLQuery = `UPDATE users SET nameUsers='${body.nameUsers}', emailUsers='${body.emailUsers}', passwordUsers='${body.passwordUsers}' WHERE idUsers=${idUser}`;

    return dbPool.execute(SQLQuery);
}

const deleteUser = (idUsers) => {
    const SQLQuery = ` DELETE FROM users WHERE idUsers='${idUsers}'`;

    return dbPool.execute(SQLQuery);
}


module.exports = {
    getAllUsers,
    registerUsers,
    updateUser,
    deleteUser,
    loginUsers,
    getNameUser,
}