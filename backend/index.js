// backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();

// === CONFIG ===
const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET;
const FRONTEND_URL = process.env.FRONTEND_URL;

// === CORS ===
const allowedOrigins = [
  'http://localhost:3000',   // Local dev
  FRONTEND_URL                // Production frontend
].filter(Boolean); // remove undefined

app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true); // Postman/server requests
    if (allowedOrigins.includes(origin)) return callback(null, true);
    console.warn('Blocked CORS request from:', origin);
    return callback(new Error('CORS not allowed'));
  },
  credentials: true
}));

app.use(express.json());

// === MONGODB CONNECTION ===
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB Connected Successfully!'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit if DB connection fails
  });

// === USER SCHEMA ===
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', UserSchema);

// === ROUTES ===
app.get('/', (req, res) => {
  res.json({ message: 'DevSync Backend is LIVE!' });
});

// REGISTER
app.post('/api/auth/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Email already exists' });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hashedPassword });

    // Create JWT
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '7d' });

    res.json({
      token,
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (err) {
    console.error('Register error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// LOGIN
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User not found' });

    // Compare hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Wrong password' });

    // Create JWT
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '7d' });

    res.json({
      token,
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// === START SERVER ===
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
