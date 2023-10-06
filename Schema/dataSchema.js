const mongoose = require("mongoose")

function validateEmail(elementValue){
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ 
    return emailPattern.test(elementValue)
}

function mob(e){
    let result = true
    if(e.length==10){
            for(let i=0 ; i<e.length;i++){
                if(Number(e[i])==e[i]){
                    continue
                }else{
                    result = false
                    break
                }
            }
    }else{
        result = false
    }
    return result
}


const dataSchema = new mongoose.Schema({
    email:{type:String,require:true,validate:{validator:validateEmail,message:"Invalid email"}},
    name:{type:String,require:true},
    dob:{type:String,require:true},
    mobile:{type:String,require:true,validate:{validator:mob,message:"Please check the number"}},
    password: { type: String, required: true }
},{versionKey:false})

const DataModel = mongoose.model("users",dataSchema)

module.exports = {DataModel}