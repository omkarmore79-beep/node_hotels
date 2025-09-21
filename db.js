const mongoose = require('mongoose');

//const mongourl = 'mongodb://localhost:27017/latest_db';
const mongourl = 'mongodb+srv://omore5900_db_user:omkar2508@cluster0.4y5yjri.mongodb.net/';


mongoose.connect(mongourl);


const db = mongoose.connection;


db.on('connected',()=>{
    console.log("connected")
})

db.on('disconnected',()=>{
    console.log("disconnected")
})

db.on('error',(err)=>{
    console.log("error")
})

module.exports = db;