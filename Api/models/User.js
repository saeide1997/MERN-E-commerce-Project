const mongoose =  require("mongoose")

const UserSchema = new mongoose.Schema({
    userName: { type: String, require: true},
    fullname: { type: String, require: true},
    email: { type: String, require: true},
    mobile: { type: Number, require: true},
    password: { type: String, require: true},
    // img: { type: String},
    role: { type:String, required:true, enum: ['admin', 'manager', 'user']},
    
},
{timestamps: true})

module.exports = mongoose.model("User", UserSchema)