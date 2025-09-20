const express = require("express");
const db = require('./db');
const bodyparser = require('body-parser');
const personroutes = require('./routes/PersonRoutes');
const menuitemsroutes = require('./routes/MenuItemRoutes');

const app = express();

app.get('/',function (req,res){
  res.send('Welcome to our hotel');
})

app.use(bodyparser.json())
app.use('/person',personroutes);
app.use('/menu',menuitemsroutes);

app.listen(3000,()=>{
    console.log("listening to the port")
})