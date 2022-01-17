const express = require ('express')
const router = express.Router()
const User = require ('../models/userModel');


router.post('/register', (req,res)=>{
    User.create(req.body)
    .then(data=>res.json(data))
    .catch(err=>res.status(500).json('failed to create person'))
})
router.post('/newuser',(req,res)=>{
    const newUser = new User(req.body)
    newUser.save()
    .then(data=>res.json(data))
    .catch(err=>res.status(500).json(err))
})
router.get('/allusers', (req,res)=>{
    User.find()
    .then(data=>res.json(data))
    .catch(err=>res.status(500).json('failed to find person'))
})
router.get('/:name', (req,res)=>{
    User.findOne({name:req.params.name})
    .then(data=>res.json(data))
    .catch(err=>res.status(500).json('failed to find person'))
})
router.get('/:userId', (req,res)=>{
    User.findById(req.params.userId,req.body)
    .then(data=>res.json(data))
    .catch(err=>res.status(500).json('failed to find person'))
})
router.put('/:userId', (req,res)=>{
    User.findByIdAndUpdate(req.params.userId,req.body)
    .then(data=>res.json(data))
    .catch(err=>res.status(500).json('failed to find person'))
})
router.delete('/:userId',(req,res)=>{
    User.findByIdAndRemove(req.params.userId)
    .then(data=>res.json(`${data.name}'s account has been deleted  `))
    .catch(err=>res.status(500).json(err))
})
router.get('/limit',(req,res)=>{
    const foodToSearch = "Tuna";
    User.find()
    .sort({name : 1})
    .limit(2)
    .select("-age")
    .exec((err, data)=> {
        if(err){
        console.log(err)
        res.json({msg:'error'})
        }else{
            res.json(data)
        }})
    })

module.exports= router