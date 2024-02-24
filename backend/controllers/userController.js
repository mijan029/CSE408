const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const router = express.Router();

const signupUser = async (req, res) => {
  
    const { email, password, branch_id, post } = req.body;
  
    try {
      //console.log("hi2")
      const user = await User.signup( email, password, branch_id, post );
      //console.log("hi1")
      //await user.save();
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '2d' });
      res.status(200).json({ email, branch_id, post, user, token});
    } catch (error) {
      res.status(400).json(error);
    }
}
  
  // Login Route
  const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.login( email, password );
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '2d' });
      res.status(200).json({ email, user, token });
    } catch (error) {
      res.status(400).json({ error: error.message});
    }
  }

  module.exports = {
    signupUser,
    loginUser
  }