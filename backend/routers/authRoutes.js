const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Signup Route
router.post('/signup', async (req, res) => {
  const { name, username, position, email, phone, address, salary, hireDate, password } = req.body;
  try {
    const user = new User({ name, username, position, email, phone, address, salary, hireDate, password });
    await user.save();
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.status(201).send({ token });
  } catch (error) {
    res.status(400).send(error);
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).send({ error: 'Login failed! Check authentication credentials' });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.send({ token });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
