const express = require('express');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());

// Mount routes
app.use('/api/auth', authRoutes);

// Safe default route
app.get('/', (req, res) => res.send('Hello from Week 7 API!'));

// Global error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Something went wrong' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server live on http://localhost:${PORT}`));