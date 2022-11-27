



const express = require("express")
const app = express()
require("dotenv").config()
const cors = require("cors")
const mongoose = require("mongoose")

const ListRouter = require("./routers/ListRouter")


app.use(cors())
app.use(express.json())
app.use("/lists", ListRouter)

mongoose.connect(process.env.MONGO_URI, () => {
    console.log("yes  !!!  connected")
})
app.listen(5000, console.log(`listen on port ${process.env.PORT}`))