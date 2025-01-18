const express = require('express');
const session = require('express-session');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const compression = require('compression');
const connectDB = require('./config/db');
const authRoutes = require('./Routes/authRoutes');

dotenv.config();

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL, // Use CLIENT_URL for CORS
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow necessary HTTP methods
  credentials: true, // Allow cookies and credentials
}));
app.use(express.json());

// Set up logging middleware
if (process.env.NODE_ENV === 'production') {
  app.use(morgan('combined')); // For production logging
} else {
  app.use(morgan('dev')); // For development logging
}

// Set up compression middleware
app.use(compression()); // Adds gzip/deflate compression for responses

// Set up session middleware
app.use(session({
  secret: process.env.SESSION_SECRET, // Secret key for encryption
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: process.env.NODE_ENV === 'production', // Only use secure cookies in production
    httpOnly: true, // Ensures cookies are not accessible via JavaScript
    sameSite: 'strict' // Helps protect against CSRF attacks
  }
}));

// Routes
app.use('/api/auth', authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong, please try again later.' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
