const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();

// === CORS: Allow localhost + your live Vercel frontend ===
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://your-vercel-frontend.vercel.app'  // ← Replace with your actual Vercel URL
    // Or temporarily allow all origins for testing:
    // origin: true
  ],
  credentials: true
}));

app.use(express.json());

// === MongoDB Connection - Use environment variable (secure) ===
const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://devsync:devsync123@cluster0.qms4hgx.mongodb.net/devsync?retryWrites=true&w=majority';

mongoose.connect(mongoURI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('MongoDB Atlas Connected Successfully!');
});

// === User Schema ===
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', UserSchema);

// === REGISTER ROUTE ===
app.post('/api/auth/register', async (req, res) => {
  console.log('Register attempt:', req.body);

  try {
    const user = await User.create(req.body);
    console.log('User saved:', user);

    const token = jwt.sign({ id: user._id }, 'secret-key', { expiresIn: '7d' });
    res.json({
      token,
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (err) {
    console.log('Register error:', err.message);
    if (err.code === 11000) {
      return res.status(400).json({ message: 'Email already exists' });
    }
    res.status(500).json({ message: 'Server error' });
  }
});

// === LOGIN ROUTE (plain password compare - temporary) ===
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User not found' });

    if (user.password !== password) {
      return res.status(400).json({ message: 'Wrong password' });
    }

    const token = jwt.sign({ id: user._id }, 'secret-key', { expiresIn: '7d' });
    res.json({
      token,
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// === Root route (optional - helpful for testing) ===
app.get('/', (req, res) => {
  res.json({ message: "DevSync Backend is LIVE!" });
});

// === CRITICAL: Use dynamic PORT from Railway ===
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});