const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { createUser, findUserByUsername } = require('../models/userModel');
require('dotenv').config();

exports.register = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'Username & password required' });
  if (findUserByUsername(username)) return res.status(409).json({ error: 'User already exists' });

  const hash = await bcrypt.hash(password, 12);
  const user = createUser({ username, passwordHash: hash });
  res.status(201).json({ message: 'User registered', user: { id: user.id, username } });
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'Username & password required' });

  const user = findUserByUsername(username);
  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const payload = { id: user.id, username: user.username };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE });
  res.json({ token, expiresIn: process.env.JWT_EXPIRE });
};