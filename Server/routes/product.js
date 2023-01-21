const router=require('express').Router();
const {verifyTokenAndAuth,verifyTokenAndAdmin}=require('./verifyToken')
const ProductModel=require('../models/Product')
const CryptoJS=require('crypto-js')

router.post('/add',verifyTokenAndAdmin,async(req,res)=>{
    const newProduct=new ProductModel(req.body)

    try{
        const savedProduct=await newProduct.save();
        res.status(200).json(savedProduct) 
    }
    catch(err){
        res.status(500).json(err)
    }
})

//This is to update the product 
router.put('/:id',verifyTokenAndAdmin, async(req,res)=>{
  
    try{
    const updateProduct=await ProductModel.findByIdAndUpdate(req.params.id,{
        $set:req.body
    },{new:true})
    console.log(updateProduct)
    res.status(200).json(updateProduct)
    }
    catch(err){
    res.status(500).json(err)
    }
    })
    
    //method to delete the user
    router.delete('/:id',verifyTokenAndAdmin,async(req,res)=>{
        try{
            await ProductModel.findByIdAndDelete(req.params.id);
            res.status(200).json("product deleted")
        }
        catch(err){
            res.status(400).json(err)
        }
    
    })
    
    //Admin method to find the user
    router.get('/find/:id',async(req,res)=>{
     try{
        const productSearch=await ProductModel.findById(req.params.id)
        res.status(200).json(productSearch)
     }
     catch(err){
        res.status(400).json(err)
     }
    
    })
    
    //Admin method to get all the products
    
    router.get('/',async(req,res)=>{
        const qNew=req.query.new;
        const qCategory=req.query.category;

        try{
            let products;
            if(qNew){
                products=await ProductModel.find().sort({createdAt:-1}).limit(1)
            }
            else if(qCategory){
                products=await ProductModel.find({categories:{
                    $in:[qCategory]
                }})
            }
            else{
                products=await ProductModel.find()

            }
            
           
           res.status(200).json(products)
        }
        catch(err){
           res.status(400).json(err)
        }
       
       })


module.exports=router;