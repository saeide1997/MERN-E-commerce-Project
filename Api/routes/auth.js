const router = require("express").Router();
const bodyParser = require("body-parser");
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const verifyToken = require("../middlewares/authMiddleware")
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt')

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
//REGISTER
router.post("/register", jsonParser, async (req, res) => {
  console.log(234);
  const newUser = new User({
    userName: req.body.userName,
    email: req.body.email,
    // img: req.body.img,
    role: req.body.role,
    mobile: req.body.mobile,
    fullname: req.body.fullname,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_CODE
    ).toString(),
  });
  try {
    console.log(22, newUser);
    const savedUser = await newUser.save();
    console.log(33, savedUser);

    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN

router.post('/login', jsonParser, async (req, res) => {
  console.log(88);
  try {
    const { userName, password } = req.body
    const user = await User.findOne({ userName })

    if (!user) {
      return res.status(404).json({ message: `User with userName ${userName} not found` })
    }

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_CODE
    );


    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    const inputPassword = password;

    originalPassword !== inputPassword &&
      res.status(401).json("Wrong Password");
    const token = jwt.sign(
      { id: user._id, role: user.role }, process.env.JWT_CODE,
      { expiresIn: "1h" }
    )
    console.log('token', token);
    res.status(200).json({ token })
  }
  catch (err) {
    res.status(500).json({ message: `SomeThing went wrong` })
  }
});

module.exports = router;