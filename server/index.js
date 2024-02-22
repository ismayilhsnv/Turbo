const express=require("express")
const app=express()
const TurboRouter=require("./routes/Prodcut.routes")
const ElaveImagesRouter=require("./routes/ElaveImages.routes")
const UserRouter=require("./routes/User.Routes")
const cors=require("cors")
const mongoose=require("mongoose")
const EmployeeModel = require('./models/Employe')
app.use(cors())
require('dotenv').config()
const PORT=process.env.PORT || 9090
const PORT2=process.env.PORT2||9020
app.use(express.json())
mongoose.connect("mongodb+srv://Ismayil:ismayıl123@ismayil.gzwfns1.mongodb.net/").then(res=>{
    console.log("connected to mongodb")
})

app.post('/Login' , (req,res)=>{
    const {email,password} = req.body
    EmployeeModel.findOne({email:email})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json("Success")
            } else{
                res.json("the password is incorrect")
            }
        } else {
            res.json("No record existed")
        }
    } )
})

app.post('/Register',(req,res)=>{
EmployeeModel.create(req.body)
.then(employees=>res.json(employees))
.catch(err=>res.json(err))
})

app.use("/turbo",TurboRouter)
app.use("/images",ElaveImagesRouter)
app.use("/user",UserRouter)
app.listen(PORT,()=>{
    console.log("back running on 9090")
})
app.listen(PORT2,()=>{
    console.log("PORT2 activ");
})