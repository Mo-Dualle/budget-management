const mongoose = require("mongoose"); 
const connect = mongoose.connect("mongodb://localhost:27017/budget")
.then(()=>{
    console.log("mongodb Connected");
})
.catch(()=>{
    console.log("failed to Connect");
})

const loginSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection= new mongoose.model("logincollection", loginSchema);

module.exports= collection