require('dotenv').config();
const express = require('express');
const router = require('./routes/workouts');
const mongoose = require('mongoose');
const app = express();

app.get('/',(req,res)=>{
    res.send("baler kaj egula");
});
app.use(express.json());
app.use('/api/workoutes', router);

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log(`Connected and listen to ${process.env.PORT}`);
        });
    })
    .catch(error=>{
        console.log("Not connected");
    });


    