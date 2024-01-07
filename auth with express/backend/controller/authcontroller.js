const userModel=require ("../model/userSchema");
const emailValidator=require('email-validation');
// const bcrypt = require('bcrypt');
const JWT=require("jsonwebtoken");

  // ---------------------signup ------------------------

const signup=async (req,res,next)=>{
    const {name,username,email,password,bio}=req.body;
    
    console.log(name,username,email,password,bio);

    if (!name || !username || !password || !email || !bio){       
        return res.status(400).json({
         success:false,
         message: 'every field required !'
        })
    }
   
   
   const validEmail =emailValidator.valid(email);   //agar koe valid email na dale uske liye 
   
   if(!validEmail){
    return res.status(400).json({
      success:false,
      message: 'please provide valid email id !'
     })

   }

   try {  // yha try catch m dal denge condition ki agar data save h to kya ho aur na save ho to kya ho
    const userInfo=userModel(req.body);  
    const result= await userInfo.save();  

    return res.status(200).json({
     success : true,
    //  message: "signup succesfully"
     data:result            //agar save ho jaega to response m user ko result vej denge
  });
    
  } catch (err) {

    if (err.code === 11000){  
       return res.status(400).json({
        success:false,
        message:'account already exists with provided email id'
       })
    }

    return res.status(400).json({
        success:false,
        message:err.message
      })
    }

   
};
















 

// ------------------------------login-----------------------------

// const login =async (req,res)=>{
//   const {username,password}=req.body;
//   if(!username || !password)
//   {
//     return res.status(400).json({
//       success:false,
//       message:"every field is mandatory"
//     })
//   }

//   const user=await userModel
//   .findOne({username})
//   .select('+password');

//   if(!user || user.password !==password){
//     return res.status(400).json({
//       success:false,
//       message : "invalid credentials !"
//     })
//   }


//   try {
    
//     const token =user.jwtToken();
//     user.password=undefined;
//     const cookieOption={
//       maxAge:24*60*60*1000,
//       httpOnly:true
//     };

//     res.cookie("token",token,cookieOption)
//     res.status(200).json({
//       success:true,
//        message:`login successful ${user.name}`
//     })


//   } catch (error) {
//     res.status(400).json({
//       success:false,
//       message:error.message
//     })
//   }


// }



//get user detail







// const getUserDetails= async(req,res,next)=>{

//   const {username} = req.user;

//   try{
//       const user = await userModel.findById ({username});
//       res.status(200).send({
//           msg:"Success",
//           data:userData
//       })

//   }
//   catch(err){
//       res.status(501).json({
//         success:false,
//         message:err.message
//       })
//   }

// }
//   const userId=req.user.id;
//   try {
//     const user=await userModel.findById(userId)
//     res.status(200).json({
//       success:true,
//        data:user
//     });
//   } catch (error) {
//     res.status(400).json({
//       success:false,
//       message:error.message
//     })
//   }

// }



module.exports={signup};
// ,login