const dbPool = require('../config/db');

const getAllHobby = () => {
    const SQLQuery = 'SELECT * FROM hobby';

    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllHobby,
}