require('dotenv').config()

const PORT = process.env.PORT || 5000;
const express = require('express');

const usersRoutes = require('./routes/users');
const hobbyRoutes = require('./routes/hobbyRoute');
const lokasiRoutes = require('./routes/lokasiRoute');

const middlewareLogRequest = require('./middleware/logs');
const upload = require('./middleware/multer');
const app = express();

app.use(middlewareLogRequest);
app.use(express.json());


app.use('/assets', express.static('public/images'));

app.use('/users', usersRoutes);

app.use('/hobby', hobbyRoutes);

app.use('/lokasi', lokasiRoutes);

app.post('/upload', upload.single('photo'),(req, res) => {
    res.json({
        message: 'Upload berhasil'
    })
});


app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
})


// app.use('/test', (req, res) => {
//     dbPool.execute('SELECT * FROM users', (err, rows) => {
//         if(err){
//             res.json({
//                 message: 'connection failed'
//             })
//         }

//         res.json({
//             message: 'connection success',
//             data: rows,
//         })
//     })
// })

app.get('/coba', (req, res) => {
    res.json({
            nama: "satria",
            email: "satria@gmail.com"
    });
});

// app.post('/', (req, res) => {
//     res.send('Hello post method');
// });

app.get('/', (req, res) => res.send("Bismillah berhasil"));

app.listen(PORT, () => {
    console.log(`Server berhasil running di port ${PORT}`);
})
