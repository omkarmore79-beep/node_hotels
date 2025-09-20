const express = require('express');
const router  = express.Router();

const menuitem = require('../models/menu');
const menu = require('../models/menu');


router.post('/',async (req,res)=>{
  try{
    const data = req.body //assume req body contain data 
    const newitem = new menuitem(data);//create a new menu document using the mingoose model 
    
    const response = await newitem.save();
    console.log('data saved');
    res.status(200).json(response)

  }catch(err){
    console.log(err);
    res.status(500).json({error:'internal server error'})

  }
})

router.get('/',async (req,res)=>{
  try{
    const data = await menuitem.find();
    console.log('data fetched');
    res.status(200).json(data);

  }catch(err)
  {
    console.log(err);
    res.status(500).json({error:'internal server error'})

  }
})

router.put('/:id',async (req,res)=> {
    try{
        const menuid = req.params.id;
        const updatedmenuid = req.body;
        const response = await menuitem.findByIdAndUpdate(personid,updatedpersonid,{
            new:true,
            runValidators:true})

        if(!response){
            return res.status(404).json({error:'menu not found'})

        }

        console.log('data fetched')
        res.status(200).json(response)
        }
    catch(err){
        res.status(500).json({error:'Internal server error'})
    }
})

router.delete('/:id',async (req,res)=>{
    try{
        const personid = req.params.id;
        const response = await menuitem.findByIdAndRemove(personid)
        if(!response){
            return res.status(404).json({error:'menu not found'})

        }
        console.log('data deleted')
        res.status(200).json({Message:'data deleted successfully'})


    }catch(err){
        res.status(500).json({error:'Internal server error'})
    }
})


module.exports = router;