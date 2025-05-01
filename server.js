const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const generateRoutes = require('./routes/generate');

const app = express();

// ✅ Only allow requests from your frontend on Vercel
app.use(cors({
  origin: ['https://resume-rocket-pied.vercel.app', 'http://localhost:3000']
}));

app.use(bodyParser.json());

// Routes
app.use('/api/generate', generateRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Backend is running on port ${PORT}`));
