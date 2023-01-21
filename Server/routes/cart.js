const router=require('express').Router();
const {verifyTokenAndAuth,verifyTokenAndAdmin, verifyToken}=require('./verifyToken')
const CartModel=require('../models/Cart')
const CryptoJS=require('crypto-js')
//function to add cart by user
router.post('/add',verifyToken,async(req,res)=>{
    const newCart=new CartModel(req.body)

    try{
        const savedCart=await newCart.save();
        res.status(200).json(savedCart) 
    }
    catch(err){
        res.status(500).json(err)
    }
})

//This is to update the cart 
router.put('/:id',verifyTokenAndAuth, async(req,res)=>{
  
    try{
    const updateCart=await CartModel.findByIdAndUpdate(req.params.id,{
        $set:req.body
    },{new:true})
    
    res.status(200).json(updateCart)
    }
    catch(err){
    res.status(500).json(err)
    }
    })
    
    //method to delete the cart
    router.delete('/:id',verifyTokenAndAuth,async(req,res)=>{
        try{
            await CartModel.findByIdAndDelete(req.params.id);
            res.status(200).json("Cart deleted")
        }
        catch(err){
            res.status(400).json(err)
        }
    
    })
    
    //Admin method to find the cart
    router.get('/find/:userId',verifyTokenAndAuth,async(req,res)=>{
     try{
        const cartSearch=await CartModel.findOne({userId:req.params.userId})
        res.status(200).json(cartSearch)
     }
     catch(err){
        res.status(400).json(err)
     }
    
    })
    
    //Admin method to get all the products
    
    router.get('/',verifyTokenAndAdmin,async(req,res)=>{
      try{
        const allCarts=await CartModel.find();
        res.status(200).json(allCarts)
      }
      catch(err){
        res.status(500).json("You are not admin")
      }
       
       })


module.exports=router;