const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
const PORT = process.env.PORT || 8000
app.use(express.json())
app.use(cors())
const userRouter  = require("./Routes/userRoutes")

app.use("/",userRouter)

app.listen(PORT,()=>{console.log(`App is listening in ${PORT}`)})