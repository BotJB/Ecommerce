const express=require('express')
var cors = require('cors')
const app=express()
const Mongoose=require('mongoose')
const dotenv=require('dotenv')
const UserRouter=require('./routes/user')
const authController=require('./routes/auth')
const ProductController=require('./routes/product')
const CartController=require('./routes/cart')
const OrderController=require('./routes/order')
app.use(cors())
dotenv.config()
Mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('database connected')
}).catch((err)=>console.log(err))

app.use(express.json())
app.use("/users",UserRouter);
app.use("/auth",authController);
app.use('/products',ProductController)
app.use('/cart',CartController)
app.use('/order',OrderController)

app.listen(5000,()=>{
    console.log("Server is running on port 5000")
})