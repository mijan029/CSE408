require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const productRouter = require('./routers/Sales/router')
//const sellRoutes = require("./routes/showroom/sellRoutes");

const employeeRoutes = require("./routers/employee/employeeRoutes");
const employeeAccountRoutes = require("./routers/employee/employeeAccountRoutes");
const employeeAttendanceRoutes = require("./routers/employee/employeeAttendanceRoutes");
const employeePerformanceRoutes = require("./routers/employee/employeePerformanceRoutes");


const app = express()

app.get('/', (req,res)=>{
    res.send("Home")
})

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
  });

//The following router is for Sales Management
app.use('/admin/products', productRouter)

//Employee routes
app.use("/employees", employeeRoutes);
app.use("/accounts", employeeAccountRoutes);

//attendance routes
app.use("/employeesAttendance", employeeAttendanceRoutes);
app.use("/employeesPerformance", employeePerformanceRoutes);

//app.use("/showroom/sells", sellRoutes)


mongoose.connect(process.env.MONGO_URI).then(
    app.listen(process.env.PORT,()=>{
        console.log(`Connected to Database and Listen to port ${process.env.PORT}`)
    })
).catch(
    error => {
        console.log("Can not be Connected")
    }
)
