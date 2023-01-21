const jwt=require('jsonwebtoken')

//This is a middleware function to verify the token
const verifyToken=(req,res,next)=>{
    const authHeader=req.headers.token;
    if(authHeader){
        const token=authHeader.split(" ")[1]
        jwt.verify(token,process.env.JWT_KEY,(err,user)=>{
            if(err) return res.status(403).json('The token has expired')
            else{
                req.user=user;
                next();
            }
        })
    }
    else{
        res.status(400).json('User is not authenticated')
    }
}

const verifyTokenAndAuth=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id===req.params.id || req.user.idAdmin){
            next();
        }
        else{
            res.status(400).json("Not authorised")
        }
    })
}

const verifyTokenAndAdmin=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if( req.user.isAdmin){
            next();
        }
        else{
            res.status(400).json("Not authorised")
        }
    })
}

module.exports={verifyToken,verifyTokenAndAuth,verifyTokenAndAdmin}