const mysql = require('mysql2');

// const dbPool = mysql.createPool({
//     host: 'sql12.freesqldatabase.com',
//     user: 'sql12667163',
//     password: 'Qe9bpnzZEX',
//     database: 'sql12667163',
// });
const dbPool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// const dbPool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'gonusa-test',
// });


// const dbPool = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
// });

module.exports = dbPool.promise();

