// Josebas "el autentico" routes
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
 
// api/users
router.get('/login', authController.login);
module.exports = router;