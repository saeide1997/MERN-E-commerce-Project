const router = require("express").Router()
const User = require("../models/User")
const bodyParser = require("body-parser");
const CryptoJS = require("crypto-js");
const verifyToken = require("../middlewares/authMiddleware")
var jsonParser = bodyParser.json()

//UPDATE USER
router.put("/:id",jsonParser, async(req, res)=>{
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password, process.env.PASS_CODE).toString()
        }

    try{
        console.log(22,req.body);
        const updatedUser = await User.findByIdAndUpdate(req.params.id, 
            {$set: req.body,},
            {new: true}
        )
        console.log(11,req.body);
        res.status(200).json(updatedUser)
    }catch(err) {
        res.status(500).json(err)
    }
    
})


//DELETE USER
router.delete(":/id", async(req, res)=>{
    try{ 
        await User.findByIdAndDelete(req.param.id)
        res.status(200).json("user put")
    }catch(err){
        res.status(500).json(err)
    }
})

//GET USER
router.get("/find/:id", async(req, res)=>{
    try{
        const user = await User.findById(req.params.id)
        const {password, ...others} = user._doc
        res.status(200).json(others)
    }catch(err){
        res.status(500).json(err)
    }
})

//GET ALL USERS
router.get("/", async(req, res)=>{
    const query = req.query.new
    try{
        const users = query ? await User.find().sort({_id:-1}).limit(5) : await User.find()
        res.status(200).json(users)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//GET USER STATE
router.get("/stats", async(req, res)=>{
    const date = new Date()
    const lastYear = new Date( date.setFullYear(date.getFullYear()-1))

    try{
        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            {
              $project: {
                month: { $month: "$createdAt" },
              },
            },
            {
              $group: {
                _id: "$month",
                total: { $sum: 1 },
              },
            },
          ]);
          res.status(200).json(data)
    }catch(err){
        res.status(500).json(err)
    }
    
})
module.exports =router