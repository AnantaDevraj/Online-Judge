import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    Name : {
        type : String,
        require : true,
        unique : true
    },
    email:{
        type : String,
        require : true,
        unique : true
    },
    password:{
        type : String,
        require : true,
    },
    phoneNo :{
        type :String,
        require : true,
        unique: true
    }
    },{timestamps : true} // we have to save the time of creation and time of Update
);

const User = mongoose.model('User', userSchema); // it creates a user model with name of 'User'
export default User;