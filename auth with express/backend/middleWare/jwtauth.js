const JWT=require ('jsonwebtoken');
const jwtAuth=(req,res,next)=>{
    const token=(req.cookies && req.cookies.token)|| null;

    if(!token){
        return res.status(400).json({
            success:false,
            message: 'you are not authorised'
        })

    }

    try{
        const payload=JWT.verify(token,process.env.SECRET)
        req.user={id:payload, email:payload.email};
    }catch(e){
       
        return res.status(400).json({
            success:false,
            message: e.message
        })
    }
    next();
}


module.exports=jwtAuth;