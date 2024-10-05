const router = require("express").Router();
const bodyParser = require("body-parser");
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
//REGISTER
router.post("/register", jsonParser, async (req, res) => {

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
    console.log(newUser);
    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (err) {
    // console.log(req.body.userName);
    res.status(500).json(err);
  }
});

//LOGIN

router.post('/login', jsonParser, async (req, res) => {
  try {

    const user = await User.findOne(
      {
        userName: req.body.userName
      }
    );

    !user && res.status(401).json("Wrong UserName");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_CODE
    );


    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    const inputPassword = req.body.password;

    originalPassword !== inputPassword &&
      res.status(401).json("Wrong Password");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_CODE,
      { expiresIn: "3d" }
    );

    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accessToken });

  } catch (err) {
    res.status(500).json(err);
  }

});

module.exports = router;