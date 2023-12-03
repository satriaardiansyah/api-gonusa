const db = require('../config/db');
const dbPool = require('../config/db');

const getAllLokasi = () => {
    const SQLQuery = 'SELECT * FROM lokasi';

    return dbPool.execute(SQLQuery);
}

const getAllLokasiHobby = (body) => {
    const SQLQuery = `select namaLokasi, description, image_path FROM lokasi INNER JOIN hobby on hobby.idHobby = lokasi.hobbyid_FK WHERE hobby.namaHobby = '${body}';`;

    return dbPool.execute(SQLQuery);
}

const getDetailLokasi = (idLokasi) => {
    const SQLQuery = `SELECT * FROM lokasi where idLokasi='${idLokasi}' `;

    return dbPool.execute(SQLQuery);
}

const createNewLokasi = (body) => {
    const SQLQuery = `INSERT INTO lokasi (namaLokasi, description, image_path, rating) VALUES ('${body.namaLokasi}', '${body.description}', '${body.image_path}', '${body.rating}')`;

    return dbPool.execute(SQLQuery);            
}

module.exports = {
    getAllLokasi,
    getDetailLokasi,
    createNewLokasi,
    getAllLokasiHobby,
}