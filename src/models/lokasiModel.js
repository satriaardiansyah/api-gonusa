const db = require('../config/db');
const dbPool = require('../config/db');

const getAllLokasi = () => {
    const SQLQuery = 'SELECT * FROM lokasi';

    return dbPool.execute(SQLQuery);
}

const getAllLokasiHome = () => {
    const SQLQuery = 'SELECT namaLokasi, image_path FROM lokasi';

    return dbPool.execute(SQLQuery);
}

const searchLokasi = (namaLokasi) => {
    const SQLQuery = `SELECT namaLokasi, image_path FROM lokasi where namaLokasi LIKE '%${namaLokasi}%'`;

    return dbPool.execute(SQLQuery);
}

const getAllLokasiHobby = (body) => {
    const SQLQuery = `SELECT namaLokasi, description, image_path, rating FROM lokasi INNER JOIN hobby on hobby.idHobby = lokasi.hobbyid_FK WHERE hobby.namaHobby = '${body}';`;

    return dbPool.execute(SQLQuery);
}

const getDetailLokasi = (idLokasi) => {
    const SQLQuery = `SELECT * FROM lokasi where idLokasi='${idLokasi}' `;

    return dbPool.execute(SQLQuery);
}

const createNewLokasi = (body) => {
    const SQLQuery = `INSERT INTO lokasi (namaLokasi, description, image_path, rating, hobbyid_FK) VALUES ('${body.namaLokasi}', '${body.description}', '${body.image_path}', ${body.rating}, ${body.hobbyid_FK})`;

    return dbPool.execute(SQLQuery);            
}

// const updateLokasi = (body, idLokasi) => {
//     const SQLQuery = `  UPDATE lokasi 
//                         SET namaLokasi='${body.namaLokasi}', description='${body.description}', image_path='${body.image_path}', rating=${body.rating} 
//                         WHERE idLokasi=${idLokasi}`;

//     return dbPool.execute(SQLQuery);
// }

const updateLokasi = (body, idLokasi) => {
    const SQLQuery = `UPDATE lokasi SET namaLokasi='${body.namaLokasi}', description='${body.description}', image_path='${body.image_path}',  rating=${body.rating} WHERE idLokasi=${idLokasi}`;

    return dbPool.execute(SQLQuery);
}

const deleteLokasi = (idLokasi) => {
    const SQLQuery = ` DELETE FROM lokasi WHERE idLokasi='${idLokasi}'`;

    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllLokasi,
    getDetailLokasi,
    createNewLokasi,
    getAllLokasiHobby,
    updateLokasi,
    deleteLokasi,
    getAllLokasiHome,
    searchLokasi,
}