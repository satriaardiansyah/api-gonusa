const dbPool = require('../config/db');

const getAllData = () => {
    const SQLQuery = 'SELECT * FROM home';

    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllData,
}