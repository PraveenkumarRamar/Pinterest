const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name :{type:String , required: true},
    description : {type:String ,require : true},
    image : {type:String , require:true},
    CreatedAt :{type:Date,default:Date.now()}
},{versionKey:false})

const UserModel = mongoose.model("datas",UserSchema)

module.exports = {UserModel}