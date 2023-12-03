const dbPool = require('../config/db');

const getAllDetailData = () => {
    const SQLQuery = 'SELECT * FROM detail';

    return dbPool.execute(SQLQuery);
}

const getDetailData = (idLokasi) => {
    const SQLQuery = `SELECT * FROM detail where idDetail='${idLokasi}'`;

    return dbPool.execute(SQLQuery);

}

module.exports = {
    getAllDetailData,
    getDetailData,
}