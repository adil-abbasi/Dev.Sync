// backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();

// === CORS ===
const allowedOrigins = [
  'http://localhost:3000',            // local dev
  'https://dev-sync-el6b.vercel.app', // your live Vercel frontend
  process.env.FRONTEND_URL             // flexibility for other environments
];

app.use(cors({
  origin: function(origin, callback) {
    // allow requests with no origin (like Postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('CORS not allowed'));
    }
  },
  credentials: true
}));

app.use(express.json());

// === CONNECT TO MONGODB ATLAS ===
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Atlas Connected Successfully!'))
  .catch(err => console.error('MongoDB connection error:', err));


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('MongoDB Atlas Connected Successfully!'));

// === USER SCHEMA ===
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const User = mongoose.model('User', UserSchema);

// === ROUTES ===
app.get('/', (req, res) => {
  res.json({ message: "DevSync Backend is LIVE!" });
});

// REGISTER
app.post('/api/auth/register', async (req, res) => {
  try {
    // hash password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.json({
      token,
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (err) {
    if (err.code === 11000) return res.status(400).json({ message: 'Email already exists' });
    res.status(500).json({ message: 'Server error' });
  }
});

// LOGIN
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User not found' });

    // compare hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Wrong password' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({
      token,
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// === LISTEN ===
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
