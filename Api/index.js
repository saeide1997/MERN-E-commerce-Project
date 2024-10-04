const express = require("express");
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/product')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')
const multer = require("multer")
const jwt = require("jsonwebtoken")
const path = require("path")
const cors = require('cors')

app.use(cors())

dotenv.config()

mongoose.connect(
    process.env.MONGO_URL
).then(() => console.log("Connect"))
    .catch((err) => {
        console.log(err);
});


// image storage engie
// const storage = multer.diskStorage({
//     destination: './upload/images',
//     filename: (req,file,cb)=>{
//         return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
//     }
// })

// const upload = multer({storage: storage})

//creating enpoint for images
// app.use('/images', express.static("upload/images"))
// app.post("/upload", upload.single("product"), (req, res)=>{
//     res.json({
//         success: 1,
//         image_url: `http://localhost:7000/images/${req.file.filename}`
//     })
// })

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute)
app.use("/api/product", productRoute)
app.use("/api/cart", cartRoute)
app.use("/api/orders", orderRoute)

app.listen(7000, () => {
    console.log("Server Is Running On Port: 7000");
})