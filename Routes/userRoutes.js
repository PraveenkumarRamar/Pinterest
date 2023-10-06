const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")

const { dburl } = require("../Config/dbConfig")
const { UserModel } = require("../Schema/userSchema")
const { DataModel } = require("../Schema/dataSchema")
const { createToken, validate, hashedPassword, comparePass } = require("../auth")
mongoose.connect(dburl)

router.get("/", (req, res) => {
    res.send({
        "message": "Router Fetched Successfully"
    })
})

router.get('/user-datas', async (req, res) => {
    try {
        let data = await DataModel.find()
        res
            .status(200)
            .send({
                message: "Data fetched successfully",
                data
            })
    } catch (error) {
        res
            .status(400)
            .send({
                message: error.message
            })
    }
})

router.post("/signup", async (req, res) => {
    try {
        let user = await DataModel.findOne({ email: req.body.email })
        if (!user) {
            req.body.password = await hashedPassword(req.body.password)
            let newUser = await DataModel.create(req.body)
            res
                .status(200)
                .send({
                    message: "New user Created"
                })
        } else {
            res
                .status(404)
                .send({
                    message: `User with this ${req.body.email} already has been enrolled`
                })
        }
    } catch (error) {
        res
            .status(404)
            .send({
                message: error.message
            })
    }
})


router.post("/signin",async (req, res) => {
    try {
        let user = await DataModel.findOne({ email: req.body.email })
        if (user) {
            if (await comparePass(req.body.password, user.password)) {
                let token = await createToken(user)
                res
                    .status(200)
                    .send({
                        message: "sign-in successfully",
                        token
                    })
            } else {
                res
                    .status(404)
                    .send({
                        message: `Wrong credetianals`
                    })
            }

        } else {
            res
                .status(404)
                .send({
                    message: `User with this ${req.body.email} doesn't exists Please Sign-up`
                })
        }
    } catch (error) {
        res
            .status(404)
            .send({
                message: error.message
            })
    }
})

router.get("/data",validate, async (req, res) => {
    try {
        let data = await UserModel.find()
        res
            .status(200)
            .send({
                message: "data fetched successfully",
                data
            })
    } catch (error) {
        res
            .status(404)
            .send({
                message: error.message
            })
    }
})

router.post("/reset-pass", async (req, res) => {
    try {
        let user = await DataModel.findOne({email:req.body.email})
        if (user) {
            if (await comparePass(req.body.old_password, user.password)) {
                user.password = await hashedPassword(req.body.new_password)
                user.save()
                res
                    .status(200)
                    .send({
                        message: "Password changed successfully"
                    })
            } else {
                res
                    .status(401)
                    .send({
                        message: "Old password is incorrect"
                    })
            }
        } else {
            res
                .status(401)
                .send({
                    message: `User doesn't exists`
                })
        }
    } catch (error) {
        res
            .status(504)
            .send({
                message: error?.message
            })
    }
})

router.post("/add-data", async (req, res) => {
    try {
        let data = await UserModel.create(req.body)
        res
            .status(200)
            .send({
                message: "Data added successfully",

            })
    } catch (error) {
        res
            .status(404)
            .send({
                message: error.message
            })
    }
})

router.put("/edit/:id", async (req, res) => {
    try {
        let data = await UserModel.findByIdAndUpdate(req.params.id)
        if (data) {
            data.name = req.body.name,
                data.description = req.body.description
            await data.save()
            res
                .status(200)
                .send({
                    message: 'updated',
                })
        } else {
            res
                .status(404)
                .send({
                    message: 'not found'
                })
        }

    } catch (error) {
        res
            .status(404)
            .send({
                message: error.message
            })
    }
})
router.delete("/delete/:id", async (req, res) => {
    try {
        let data = await UserModel.findByIdAndDelete(req.params.id)
        if (data) {
            res
                .status(200)
                .send({
                    message: 'deleted'
                })
        } else {
            res
                .status(404)
                .send({
                    message: 'not found'
                })
        }

    } catch (error) {
        res
            .status(404)
            .send({
                message: error.message
            })
    }
})

module.exports = router