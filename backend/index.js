const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: "DevSync Backend is LIVE!" });
});

app.listen(5000, () => {
  console.log('Backend running on http://localhost:5000');
});