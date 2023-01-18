const express=require('express')
const app=express()
const Mongoose=require('mongoose')
const dotenv=require('dotenv')
const UserRouter=require('./routes/user')
const authController=require('./routes/auth')
dotenv.config()
Mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('database connected')
}).catch((err)=>console.log(err))

app.use(express.json())
app.use("/users",UserRouter);
app.use("/auth",authController);

app.listen(5000,()=>{
    console.log("Server is running on port 5000")
})