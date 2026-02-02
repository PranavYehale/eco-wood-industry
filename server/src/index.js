const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.get('/api', (req, res) => {
  res.json({ message: 'Eco Wood Industry API Server is running!' });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Sample API endpoints for the wood industry platform
app.get('/api/wood-types', (req, res) => {
  res.json([
    { id: 1, name: 'Teak Wood', price: 1200, unit: 'per ton' },
    { id: 2, name: 'Pine Wood', price: 800, unit: 'per ton' },
    { id: 3, name: 'Oak Wood', price: 1500, unit: 'per ton' },
    { id: 4, name: 'Bamboo', price: 600, unit: 'per ton' }
  ]);
});

app.get('/api/stats', (req, res) => {
  res.json({
    woodRecycled: '500+',
    clientsServed: '200+',
    yearsExperience: '10+',
    treesSaved: '2000+'
  });
});

// For Vercel deployment
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;