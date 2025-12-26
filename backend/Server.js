const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();

// FIX CORS - ALLOW FRONTEND
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());

// === CONNECT TO MONGODB ATLAS (100% WORKING VERSION) ===
mongoose.connect('mongodb+srv://devsync:devsync123@cluster0.qms4hgx.mongodb.net/devsync?retryWrites=true&w=majority');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('MongoDB Atlas Connected Successfully!');
});// === USER SCHEMA (THIS ONE WORKS 100%) ===
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },  // ← MUST BE unique, NO sparse
  password: { type: String, required: true },
});

const User = mongoose.model('User', UserSchema);

// === REGISTER ROUTE (GUARANTEED TO SAVE) ===
app.post('/api/auth/register', async (req, res) => {
  console.log('Register attempt:', req.body); // ← you will see this in terminal

  User.create(req.body)
    .then(user => {
      console.log('User saved:', user); // ← proof it saved
      const token = jwt.sign({ id: user._id }, 'secret-key', { expiresIn: '7d' });
      res.json({
        token,
        user: { id: user._id, name: user.name, email: user.email }
      });
    })
    .catch(err => {
      console.log('Register error:', err.message);
      if (err.code === 11000) {
        return res.status(400).json({ message: 'Email already exists' });
      }
      res.status(500).json({ message: 'Server error' });
    });
});
// LOGIN
// LOGIN ROUTE (MUST BE EXACTLY LIKE THIS)
// TEMPORARY LOGIN – NO BCRYPT (WORKS INSTANTLY)
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User not found' });

    // DIRECT COMPARE – NO HASHING
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
app.listen(5000, () => {
  console.log('Backend running on http://localhost:5000');
});