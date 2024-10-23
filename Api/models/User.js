const mongoose =  require("mongoose")

const UserSchema = new mongoose.Schema({
    userName: { type: String, require: true, unique: true},
    fullname: { type: String, require: true, unique: true},
    email: { type: String, require: true, unique: true},
    mobile: { type: Number, require: true},
    password: { type: String, require: true, unique: true},
    // img: { type: String},
    role: { type:String, required:true, enum: ['admin', 'manager', 'user']},
    
},
{timestamps: true})

module.exports = mongoose.model("User", UserSchema)