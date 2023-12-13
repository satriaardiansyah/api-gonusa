const dbPool = require('../config/db.js');

const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM users';
    
    return dbPool.execute(SQLQuery);
    
}

const registerUsers = (body) => {
    const SQLQuery = `INSERT INTO users (emailUsers, namaUsers, passwordUsers)
                      VALUE ('${body.name}', '${body.email}', '${body.password}')`;

    return dbPool.execute(SQLQuery);
}

const loginUsers = (body) => {
    const SQLQuery = `SELECT * FROM users 
                      WHERE emailUsers = '${body.email}' AND passwordUsers = '${body.password}'`;

    return dbPool.execute(SQLQuery);
}


const updateUser = (body, idUser) => {
    const SQLQuery = `UPDATE users SET namaUsers='${body.name}', emailUsers='${body.email}', passwordUsers='${body.address}' WHERE idUsers=${idUser}`;

    return dbPool.execute(SQLQuery);
}

const deleteUser = (idUser) => {
    const SQLQuery = ` DELETE FROM users WHERE id='${idUser}'`;

    return dbPool.execute(SQLQuery);
}


module.exports = {
    getAllUsers,
    registerUsers,
    updateUser,
    deleteUser,
    loginUsers,
}