const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const router = express.Router();
const { signupUser, loginUser } = require('../controllers/userController');

// Signup Route
router.post('/signup', signupUser);

// Login Route
router.post('/login', loginUser);

module.exports = router;
