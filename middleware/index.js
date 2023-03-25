var express = require('express');
var auth = require('./auth');
var router = express.Router();

// Daftar menu Registrasi
router.post('/api/v1/register', auth.register);

module.exports = router;