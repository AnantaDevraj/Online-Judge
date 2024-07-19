import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs'; // this is for hashing the password of users
import { errorHandler } from '../utils/error.js'; // for handling errors

export const signup = async (req, res ,next) => {
  const { Name, email, password, phoneNo } = req.body;

  if (!Name || !email || !password || !phoneNo || Name === '' || email === '' || password === '' || phoneNo === '') {
    next(errorHandler(400 , 'All fields are required'));
  } // if all fields are empty then it shows error

  const hashPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    Name,
    email,
    password: hashPassword,
    phoneNo
  }); // creating a new User into the database

  try {
    await newUser.save(); // to save the data of the new user
    res.json('Signup successful');
  } catch (error) {
    next(error);
  }
};
