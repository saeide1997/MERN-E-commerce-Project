const router = require("express").Router()
const Cart = require("../models/Cart")
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require("./verifyToken")

//CREATE CART
router.post("/", verifyToken, async(req, res)=>{
    const newCart = new Cart(req.body)

    try{
        const savedCart = await newCart.save()
        res.status(200).json(savedCart)
    }catch(err){
        res.status(500).json(err)
    }
})

//UPDATE Cart
router.put("/:id", verifyTokenAndAuthorization, async(req, res)=>{
    
    try{
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, 
            {$set: req.body,},
            {new: true}
        )
        res.status(200).json(updatedCart)
    }catch(err) {
        res.status(500).json(err)
    }
    
})

//DELETE Cart
router.delete(":/id", verifyTokenAndAuthorization, async(req, res)=>{
    try{
        await Cart.findByIdAndDelete(req.param.id)
        res.status(200).json("Cart put")
    }catch(err){
        res.status(500).json(err)
    }
})

//GET Cart
router.get("/find/:id", async(req, res)=>{
    try{
        const cart = await Cart.findOne({id: req.params.id})
        res.status(200).json(cart)
    }catch(err){
        res.status(500).json(err)
    }
})


//GET ALL CARTS
router.get("/", verifyTokenAndAdmin, async(req, res)=>{

    try{
        
        const carts = await Cart.find()
        res.status(200).json(carts)
    }
    catch(err){
        res.status(500).json(err)
    }
})

module.exports =router