import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './API/routes/user.route.js';
import authRoutes from './API/routes/auth.route.js';
import cors from 'cors';

// Load environment variables from .env file
dotenv.config();

// Log the environment variables to check if they are loaded correctly
const PORT = process.env.PORT || 3000;

mongoose
  .connect(
    process.env.MONGO
  ).then(() => console.log('mongoDB is Connected'))
  .catch(err => console.log('refuse to connect..', err));

const app = express();
app.use(express.json());

// CORS middleware
app.use(cors({
  origin: '*', // Allow all origins
  methods: 'GET, POST, PUT, DELETE, OPTIONS',
  allowedHeaders: 'Content-Type, Authorization'
}));

// Routes
app.use('/api/user', userRoutes); // it is call back from user.route.js
app.use('/api/auth', authRoutes); // it is call back from auth.route.js

// Error-handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
