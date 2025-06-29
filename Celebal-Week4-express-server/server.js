// Import express
const express = require('express');

// Create an express app
const app = express();

// Middleware to log the request method and URL
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Middleware to parse JSON request bodies
app.use(express.json());

// 🟩 ✅ Middleware: Parse URL-encoded body (HTML forms)
app.use(express.urlencoded({ extended: true }));

// Route 1: Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

// Route 2: About route
app.get('/about', (req, res) => {
  res.send('This is the About Page.');
});

// Route 3: POST route example
app.post('/submit', (req, res) => {
  const data = req.body;
  res.send(`Data received: ${JSON.stringify(data)}`);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});