const router = require('express').Router();



router.get('/', (req, res) => {
    res.send('<h1>Halaman Utama</h1>');
})
router.get('/karyawan/:nama/:asal/:negara', (req, res) => {
    const {nama, asal, negara} = req.params;
    res.json({
        nama: nama,
        asal: asal,
        negara: negara
    })
})

router.post('/add-karyawan', (req, res) => {
    const {nama, asal, negara} = req.body;
    res.json({
        nama, 
        asal,
        negara
    })
  });

module.exports= router;