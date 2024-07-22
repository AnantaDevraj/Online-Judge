import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    unique: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  phoneNo: {
    type: String,
    required: [true, 'Phone number is required']
  }
});

const User = mongoose.model('User', userSchema);

export default User;
