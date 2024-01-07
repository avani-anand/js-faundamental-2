const express = require('express')

const{signup}=require('../controller/authcontroller');
// const jwtAuth = require('../middleWare/jwtauth');

const authRouter=express.Router()

authRouter.post('/signup',signup)
// authRouter.post('/login',login)
// authRouter.get('/getUserDetails',jwtAuth,getUserDetails)




module.exports=authRouter;