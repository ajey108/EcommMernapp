import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },

    cartData:{
        type:Object,
    },
},{timestamps:true});

const User = mongoose.model("User", userSchema);

export default User;
