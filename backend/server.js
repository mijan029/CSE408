require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const productRouter = require('./Sales/routers/router')
const app = express()

app.get('/', (req,res)=>{
    res.send("Home")
})

app.use(express.json())


//The following router is for Sales Management
app.use('/admin/product', productRouter)


mongoose.connect(process.env.MONGO_URI).then(
    app.listen(process.env.PORT,()=>{
        console.log(`Connected to Database and Listen to port ${process.env.PORT}`)
    })
).catch(
    error => {
        console.log("Can not be Connected")
    }
)
