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

  const getAllUser = async (req, res) => {
    try {
      const user = await User.find({});
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message});
    }
  }

  const updateUser = async (req, res) => {
    try {
      // Assuming the user's ID is passed as a URL parameter and accessible via req.params.id
      const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });  
  
      if (!user) {
        // If no user is found with the given ID, send a 404 response
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Respond with the updated user document
      res.status(200).json(user);
    }
    catch (error) {
      // Catch any errors that occur during the update process
      res.status(400).json({ error: error.message });
    }
  }
  

  module.exports = {
    signupUser,
    loginUser,
    getAllUser,
    updateUser
  }