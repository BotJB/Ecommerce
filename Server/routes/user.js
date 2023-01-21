const router=require('express').Router();
const {verifyToken}=require('./verifyToken')
const {verifyTokenAndAuth,verifyTokenAndAdmin}=require('./verifyToken')
const UserModel=require('../models/User')
const CryptoJS=require('crypto-js')

//This is to update the user 
router.put('/:id',verifyTokenAndAuth, async(req,res)=>{
if(req.body.password){
    req.body.password=CryptoJS.AES.encrypt(req.body.password, process.env.PASS).toString()
}
try{
const updateUser=await UserModel.findByIdAndUpdate(req.params.id,{
    $set:req.body
},{new:true})
console.log(updateUser)
res.status(200).json(updateUser)
}
catch(err){
res.status(500).json(err)
}
})

//method to delete the user
router.delete('/:id',verifyTokenAndAuth,async(req,res)=>{
    try{
        await UserModel.findByIdAndDelete(req.params.id);
        res.status(200).json("user deleted")
    }
    catch(err){
        res.status(400).json(err)
    }

})

//Admin method to find the user
router.get('/find/:id',verifyTokenAndAdmin,async(req,res)=>{
 try{
    const userSearch=await UserModel.findById(req.params.id)
    console.log(userSearch)
    const {password,...others}=userSearch
    res.status(200).json(other)
 }
 catch(err){
    res.status(400).json(err)
 }

})

//Admin method to get all the user

router.get('/',verifyTokenAndAdmin,async(req,res)=>{
    try{
        const query=req.query.new
        console.log("The value is"+query)
       const users=query?await UserModel.find().sort({_id:-1}).limit(1):await UserModel.find()
       res.status(200).json(users)
    }
    catch(err){
       res.status(400).json(err)
    }
   
   })

module.exports=router;