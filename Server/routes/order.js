const router=require('express').Router();
const {verifyTokenAndAuth,verifyTokenAndAdmin, verifyToken}=require('./verifyToken')
const OrderModel=require('../models/Order')
const CryptoJS=require('crypto-js')
//function to add order by user
router.post('/add',verifyTokenAndAuth,async(req,res)=>{
    const newOrder=new OrderModel(req.body)

    try{
        const savedOrder=await newOrder.save();
        res.status(200).json(savedOrder) 
    }
    catch(err){
        res.status(500).json(err)
    }
})

//This is to update the cart 
router.put('/:id',verifyTokenAndAdmin, async(req,res)=>{
  
    try{
    const updateOrder=await OrderModel.findByIdAndUpdate(req.params.id,{
        $set:req.body
    },{new:true})
    
    res.status(200).json(updateOrder)
    }
    catch(err){
    res.status(500).json(err)
    }
    })
    
    //method to delete the cart
    router.delete('/:id',verifyTokenAndAdmin,async(req,res)=>{
        try{
            await OrderModel.findByIdAndDelete(req.params.id);
            res.status(200).json("Order deleted")
        }
        catch(err){
            res.status(400).json(err)
        }
    
    })
    
    //Admin method to find the cart
    router.get('/find/:userId',verifyTokenAndAdmin,async(req,res)=>{
     try{
        const orderSearch=await OrderModel.findOne({userId:req.params.userId})
        res.status(200).json(orderSearch)
     }
     catch(err){
        res.status(400).json(err)
     }
    
    })
    
    //Admin method to get all the orders
    
    router.get('/',verifyTokenAndAdmin,async(req,res)=>{
      try{
        const allOrders=await OrderModel.find();
        res.status(200).json(allOrders)
      }
      catch(err){
        res.status(500).json("You are not admin")
      }
       
       })


module.exports=router;