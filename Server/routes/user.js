const router=require('express').Router();
const {verifyToken}=require('./verifyToken')
const {verifyTokenAndAuth}=require('./verifyToken')
const UserModel=require('../models/User')

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
//This is to update the user 
module.exports=router;