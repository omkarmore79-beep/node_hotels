const { uniqueId } = require('lodash');
const mongoose = require('mongoose');

const personschema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        age:{
            type:Number
        },
        work:{
            type:String,
            enum:['chef','waiter','manager'],
            required:true
        },
        mobile:{
            type:Number,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        address:{
            type:String,
        },
        salary:{
            type:Number,
            required:true
        }
    }
)

//persons
const person = mongoose.model('person',personschema);
module.exports = person;
