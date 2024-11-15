const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// MongoDB connection string from environment variables
const DB_URI = process.env.DB_URI;

// Function to connect to MongoDB
const connectDB = async () => {
    try {
        // Connect to MongoDB using mongoose
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (err) {
        // Handle connection errors
        console.error('MongoDB connection error:', err);
        process.exit(1); // Exit the process with failure code
    }
};

module.exports = connectDB;
