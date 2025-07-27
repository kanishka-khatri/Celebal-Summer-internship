const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

const uploadRoutes = require('./routes/upload');
const weatherRoutes = require('./routes/weather');
const errorHandler = require('./middleware/errorHandler');

// Middleware
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api', uploadRoutes);
app.use('/api', weatherRoutes);

// Global Error Handler
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
