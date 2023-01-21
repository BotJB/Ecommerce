const router=require('express').Router();
const stripe=require('stripe')(process.env.STRIPE_KEY)

router.post('payments',(req,res)=>{
    stripe.charges.create({
        source:req.body.tokenId,
        amount:req.body.amount,
        currency:"cad",

    },(stripeErr,stripeSucc)=>{
        if(stripeErr){
            res.status(500).json(stripeErr)        }
            else{
                res.status(200).json(stripeSucc)
            }
    })
})


module.exports=router