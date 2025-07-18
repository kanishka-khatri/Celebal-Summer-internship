const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const auth = require('../middleware/auth');

router.post('/register', register);
router.post('/login', login);

// Example protected route
router.get('/dashboard', auth, (req, res) => {
  res.json({ message: `Hello ${req.user.username}, welcome to your dashboard!`, user: req.user });
});

module.exports = router;
