let jwt = require("jsonwebtoken")
let bcrypt = require('bcryptjs')
const { genSalt } = require('bcrypt')

let hashedPassword = async(password) =>{
    let salt = await bcrypt.genSalt(10)
    let hashedPass = await bcrypt.hash(password,salt)
    return hashedPass
}

let comparePass = async(password,hashedPas) =>{
    return bcrypt.compare(password,hashedPas)
} 
let createToken = async({email,name})=>{
    let token = await jwt.sign(
        {email,name},
        process.env.JWT_SK,
        {expiresIn:process.env.JWT_EXPIRE}
    )
    return token
}

let decodetoken = async(token)=>{
    return jwt.decode(token)
}

let validate = async(req,res,next)=>{
    let token  = req?.headers?.authorization?.split(" ")[1]
    // console.log(token)
    if(token){
        let {exp} = await decodetoken(token)
        // console.log(exp)
        // console.log(((Math.round(+ new Date))/1000));
        if(((Math.round(+ new Date))/1000)<exp){
            next()
        }else{
            res
            .status(401)
            .send({
                message:"Token has been expired"
            })
        }
    }else{
        res
        .status(401)
        .send({
            message:"Token not found "
        })
    }
}

module.exports = {createToken,validate,hashedPassword,comparePass}