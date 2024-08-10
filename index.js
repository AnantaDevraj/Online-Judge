import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import authRoutes from './API/routes/auth.route.js';
import problemRoutes from './API/routes/problem.route.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/problems', problemRoutes); // This route handles storing and retrieving problems

// Error handling
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(err.statusCode || 500).json({ message: err.message });
});

// Connect to MongoDB and start server
const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });
