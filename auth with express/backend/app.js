const express =require('express')
// const cors = require("cors")

const app = express();
const authrouter= require('./router/authRouter')
const path=require("path")
const bodyParser =require("body-parser");
const databaseConnect=require('./config/databaseConfig')
const cookieParser = require('cookie-parser');


// app.use(cors({
//     origin:"http://localhost:5500",
//     credentials:true
// }))

databaseConnect();
app.use(bodyParser.urlencoded({extended:false}))  
app.use(express.json())  
app.use(cookieParser);


app.use('/api/auth/', authrouter);

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname ,'../frontend/index.html'))
})



module.exports=app;
