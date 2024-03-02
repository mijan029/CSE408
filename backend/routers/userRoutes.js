const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const router = express.Router();
const { signupUser, loginUser, getAllUser, updateUser } = require('../controllers/userController');

// Signup Route
router.post('/signup', signupUser);

// Login Route
router.post('/login', loginUser);

// Get User Profile Route
router.get('/profile', getAllUser);

// Update User Profile Route
router.put('/profile/edit/:id', updateUser);

module.exports = router;
