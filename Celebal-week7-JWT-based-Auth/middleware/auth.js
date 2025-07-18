const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = function auth(req, res, next) {
  const header = req.headers['authorization'];
  const token = header && header.startsWith('Bearer ') && header.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Token missing' });

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Invalid or expired token' });
  }
};