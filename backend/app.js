import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';


import productRoutes from './routes/productRoutes.js';
import authRoutes from './routes/authRoute.js'; 

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());



// Serve static files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/images', express.static(path.join(__dirname, 'Uploads/images')));

// Database connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(`Database connection error: ${err}`));

// Test route
app.get('/', (req, res) => {
  res.send('App is running');
});

// Routes
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
app.listen(port, (error) => {
  if (error) {
    console.error(`Error starting server: ${error}`);
  } else {
    console.log(`Server running on port ${port}`);
  }
});


