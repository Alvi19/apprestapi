var express = require('express');
var auth = require('./auth');
var verifikasi = require('./verifikasi');
var router = express.Router();


// Daftar menu Registrasi
router.post('/api/v1/register', auth.register);
router.post('/api/v1/login', auth.login);

// Alamat yang perlu otorisasi
router.get("/api/v1/rahasia", verifikasi(), auth.rahasia);

module.exports = router;