import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Log the environment variables to check if they are loaded correctly

const PORT = process.env.PORT || 3000;

mongoose
 .connect(
    process.env.MONGO
 ).then(() =>(console.log('mongoDB is Connected')))
 .catch(err =>(console.log('refuse to connect..' , err)));

const app = express();

app.get("/", (req, res) => {
  res.send("HELLO WORLD");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
