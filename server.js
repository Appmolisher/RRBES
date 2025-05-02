const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const generateRoutes = require('./routes/generate');

const app = express();

// ✅ FIXED: Allow CORS from Vercel frontend
app.use(cors({
  origin: [
    'https://resume-rocket-5g3krvql5-appmolishers-projects.vercel.app',
    'http://localhost:3000'
  ]
}));

app.use(bodyParser.json());

app.use('/api/generate', generateRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));





