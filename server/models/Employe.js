const mongoose=require("mongoose")

const EmployeeSchema=mongoose.model("employees",new mongoose.Schema({
    name:String,
    email:String,
    password:String
    
}))

module.exports=EmployeeSchema