const express = require('express')
const { getUsers, Register, login, Logout, forget, changepassword } = require("../controllers/Users.js");

const router = express.Router();
router.get('/getUsers', getUsers);
router.post('/users', Register);
router.post('/login', login);
router.post('/logout', Logout);
router.post('/forget', forget);
router.post('/changepassword', changepassword);

module.exports = router;