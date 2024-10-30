const router = require("express").Router()
const Product = require("../models/Product")
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json()

// create
router.post("/",jsonParser, async(req, res)=>{
    const newProduct = new Product(req.body)

    try{
        console.log(88888,req.body);
        const savedProduct = await newProduct.save()
        console.log(22222,req.body);
        res.status(200).json(savedProduct)
    }catch(err){
        res.status(500).json(err)
    }
})

//UPDATE PRODUCT
router.put("/:id",jsonParser, async(req, res)=>{
    try{
        console.log(req.body);
        console.log(req.params.id);
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, 
            {$set: req.body,},
            {new: true}
            )
        res.status(200).json(updatedProduct)
    }catch(err) {
        res.status(500).json(err)
    }
    
})

//DELETE Product
router.delete("/:id", async(req, res)=>{
    try{
        
        await Product.findByIdAndDelete(req.params.id)
        console.log(7777,req.params.id);
        res.status(200).json(`Product put:${id}`)
    }catch(err){
        res.status(500).json(err)
    }
})

//GET product
router.get("/find/:id", async(req, res)=>{
    try{
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    }catch(err){
        res.status(500).json(err)
    }
})


//GET ALL USERS
router.get("/products", async(req, res)=>{
    const queryNew = req.query.new
    const queryCategory = req.query.category

    try{
        let products

        if( queryNew){
            products = await Product.find().sort({createdAt : -1}).limit(5)
        }else if(queryCategory){
            products = await Product.find({categories:{
                $in:[queryCategory]
            }})
        }else{
            products = await Product.find()
        }
    
        res.status(200).json(products)
    }
    catch(err){
        res.status(500).json(err)
    }
})

module.exports =router