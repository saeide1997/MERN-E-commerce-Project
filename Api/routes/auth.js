const router = require("express").Router();
const bodyParser = require("body-parser");
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const verifyToken = require("../middlewares/authMiddleware")
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt')
const {register, login} = require( '../controllers/authController')

var jsonParser = bodyParser.json()

router.post("/register",jsonParser, register)
router.post("/login", jsonParser, login, verifyToken)

module.exports = router;