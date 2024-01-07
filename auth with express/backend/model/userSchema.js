const mongoose= require('mongoose');
const {schema}= mongoose;
// const JWT=require ('jsonwebtoken');
// const bcrypt=require('bcrypt');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require: [true,'user name is Required'],  
        minLength :[5,'name must be at least 5 character'],  
        maxLength :[50,'name must be less than 50 character'],  
        trim:true 
     },
     username:{
        type:String,
        require: [true,'user name is Required'],   
        minLength :[4,'name must be at least 5 character'],  
        maxLength :[10,'name must be less than 50 character'], 
     },
     email:{
            
        type:String,
        require: [true,'email is Required'],
        unique : true,  
        lowercase: true,
        unique:[true,'already registered']  
    },
    password:{
        type:String,
        Select:false
    },
    forgotPasswordToken:{
        type:String,
    },
    forgotPasswordExpiryDate:{
           type:Date   ,
    },
    bio:{
        type:String,
        require: [true,'user name is Required'],   
        minLength :[4,'name must be at least 5 character'],  
        maxLength :[70,'name must be less than 50 character'], 

    },
},{timestamps:true });




// //to change pasword in hash form before saving it




// userSchema.pre("save",async function(next){
//     if (!this.isModified('password')) return next();

//     this.password = await bcrypt.hash(this.password, 12); //hashing password
//     return next();
// })



// method to generate token 



// userSchema.methods={
//     jwtToken(){
//         return JWT.sign({id:this._id,username:this.username},process.env.SECRET,{
//             expiresIn:'24d'
//         })
//     }
// }










const userModel = mongoose.model('instauser',userSchema); 
module.exports=userModel;
