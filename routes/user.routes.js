const express = require('express');
const userController= require('../controllers/user.controller')

const router = express.Router();


router.get("signin",userController.getUsers)


module.exports = router;