const express = require('express');
const router = express.Router();

//models
const Channel = require("../models/channel");
const User = require("../models/user");
const Video = require("../models/video");

//path
router.get('/user', async(req,res)=>{
    await User.query().then(data=>{
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
});

router.get('/user/:id', async(req,res)=>{
    try{
        const data = await User.query().findById(req.params.id)
        res.send(data)
    }catch(err){
        console.log(err);
        res.status(500).json(err)
    }
});

router.post('/add_user',async(req,res)=>{
    const data = await User.query().insert(req.body);
    res.send(data);
})

router.put('/update_user/:id', async(req,res)=>{
    try{
        const data = await User.query()
        .findById(req.params.id)
        .patch(req.body);
        res.sendStatus(200);
    }catch(err){
        console.log(err);
        res.status(500).json(err)
    }
});

router.delete('/delete_user/:id', async(req,res)=>{
    try{
        const data = await User.query().deleteById(1);
        res.sendStatus(200);
    }catch(err){
        console.log(err);
        res.status(500).json(err)
    }
});

module.exports = router;
