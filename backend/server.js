require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const productRouter = require('./routers/Sales/router')
//const sellRoutes = require("./routes/showroom/sellRoutes");

const employeeRoutes = require("./routers/employee/employeeRoutes");
const employeeAccountRoutes = require("./routers/employee/employeeAccountRoutes");
const employeeAttendanceRoutes = require("./routers/employee/employeeAttendanceRoutes");
const employeePerformanceRoutes = require("./routers/employee/employeePerformanceRoutes");

const historyProduceProductRouter = require('./routers/production/historyProduceProductRouter')
const historyOrderFactoryRouter = require('./routers/production/historyOrderFactoryRouter')
const factoryProductRouter = require('./routers/production/factoryProductRouter')


const rawRouter = require('./routers/production/rawRouter')
const historyPurchaseRawRouter = require('./routers/production/historyPurchaseRawRouter')
const historyReqOrderRouter = require('./routers/production/historyReqOrderRouter')
const userRoutes = require('./routers/userRoutes')

const salesRoutes = require('./routers/Sales/router')
const sellRoutes = require('./routers/Sales/sellRouter')

const app = express()

app.get('/', (req,res)=>{
    res.send("Home")
})

app.use(cors());
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
  });

//The following router is for Sales Management

//Employee routes
app.use("/employees", employeeRoutes);
app.use("/accounts", employeeAccountRoutes);

//attendance routes
app.use("/employeesAttendance", employeeAttendanceRoutes);
app.use("/employeesPerformance", employeePerformanceRoutes);

//Showroom routes
app.use("/showroom/:id/product", salesRoutes);
app.use("/showroom/:id/sell", sellRoutes);

//production routes
app.use("/factory/product/produceHistory",historyProduceProductRouter);
app.use("/factory/product/orderHistory",historyOrderFactoryRouter);
app.use('/factory/product', factoryProductRouter)

app.use("/factory/raw/requestOrderHistory",historyReqOrderRouter);
app.use("/factory/raw/purchaseHistory",historyPurchaseRawRouter);
app.use("/factory/raw",rawRouter);

//user routes
app.use("/user", userRoutes);


mongoose.connect(process.env.MONGO_URI).then(
    app.listen(process.env.PORT,()=>{
        console.log(`Connected to Database and Listen to port ${process.env.PORT}`)
    })
).catch(
    error => {
        console.log("Can not be Connected")
    }
)
