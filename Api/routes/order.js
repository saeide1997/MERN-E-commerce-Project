const router = require("express").Router()
const Order = require("../models/Order")
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require("./verifyToken")
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json()

//CREATE Order
router.post("/",jsonParser, async(req, res)=>{
    const newOrder = new Order(req.body)

    try{
        const savedOrder = await newOrder.save()
        res.status(200).json(savedOrder)
    }catch(err){
        res.status(500).json(err)
    }
})

//UPDATE Order
router.put("/:id",jsonParser, async(req, res)=>{
    
    try{
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, 
            {$set: req.body,},
            {new: true}
        )
        res.status(200).json(updatedOrder)
    }catch(err) {
        res.status(500).json(err)
    }
    
})

//DELETE Order
router.delete("/:id", jsonParser, async(req, res)=>{
    try{
        await Order.findByIdAndDelete(req.param.id)
        res.status(200).json("Order put")
    }catch(err){
        res.status(500).json(err)
    }
})

//GET Order
router.post("/find/:id", jsonParser, async(req, res)=>{
    try{
        const order = await Order.findOne({id: req.params.id})
        res.status(200).json(order)
    }catch(err){
        res.status(500).json(err)
    }
})


//GET ALL OrderS
router.get("/orders", async(req, res)=>{

    try{
        
        const orders = await Order.find()
        res.status(200).json(orders)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//GET MONTHLY INCOME
router.get("/income", async(req, res)=>{
    const date = new Date()
    const lastMonth = new Date( date.setMonth(date.getMonth()-1))
    const prevMonth = new Date( new Date().setMonth(lastMonth.getMonth()-1))

    try{
        const income =await Order.aggregate([
            {
                $match: {createdAt:{$gte: prevMonth}}
            },
            {
                $project: {$month: "$createdAt", sales: "$amount"},
            },
            {
                $group:{
                    _id: "$month",
                    total: {$sum: "$sales"}
                }
            }
        ])
        res.status(200).json(income)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports =router