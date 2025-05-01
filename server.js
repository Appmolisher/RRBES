const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const generateRoutes = require('./routes/generate');

const app = express();

// ✅ Fix: Allow your Vercel frontend to talk to your backend
app.use(cors({
  origin: ['https://resume-rocket-pied.vercel.app', 'http://localhost:3000']
}));

app.use(bodyParser.json());

// Your AI route
app.use('/api/generate', generateRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));

git add .
git commit -m "Fix CORS to allow Vercel frontend"
git push
