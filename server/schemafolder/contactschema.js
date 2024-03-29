const mongoose= require ('mongoose');

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true   
    },
    email:{
        type:String,
        required:true
    },
    phonenumber:{
        type:Number,
        required:true
    },
    message:{
        type:String,
        required:true
    },
})

const User= mongoose.model("USER",userSchema);

module.exports = User;