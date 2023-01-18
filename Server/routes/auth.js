const router=require('express').Router();
const UserModel=require('../models/User')
const CryptoJS=require('crypto-js')
const jwt=require('jsonwebtoken')

router.post('/register',async(req,res)=>{
      console.log(req.body)
    const newUser=new UserModel({
        username:req.body.username,
        password:CryptoJS.AES.encrypt(req.body.password, process.env.PASS),
        email:req.body.email,
           
        
    })
    try{
        const savedUser=await newUser.save();
        const {password,...other}=savedUser
        res.status(200).json(other)
    }
    catch(err){
        res.status(500).json(err)
    }
})


router.post("/login",async(req,res)=>{
   
    const user=await UserModel.findOne({username:req.body.username})
        if(!user){
           res.status(500).json("User not found")
        }
        const hashedPassword=CryptoJS.AES.decrypt(user.password,process.env.PASS);
        const orignalPassword=hashedPassword.toString(CryptoJS.enc.Utf8)
        if(orignalPassword===req.body.password){
          
            const accessToken=jwt.sign({
                id:user._id,
                isAdmin:user.isAdmin
            },process.env.JWT_KEY,{expiresIn:"3d"})

            const {password,...others}=user._doc
            res.status(200).json({...others,accessToken})

            
        }
          

})

module.exports=router