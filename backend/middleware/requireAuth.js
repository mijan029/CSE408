const jwt = require('jsonwebtoken');
const User = require('../models/User');

const requireAuth = async (req, res, next) => {
  // Get the token from the Authorization header
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authorization token required' });
  }

  // Extract the token from the Authorization header
  const token = authorization.split(' ')[1];

  try {
    // Verify the token
    const {_id} = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the user payload to the request object
    req.user = await User.findOne({ _id }).select('_id');
    

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    // Handle error (e.g., token is invalid or expired)
    res.status(401).json({ message: 'Unauthorized: Token invalid' });
  }
};

module.exports = requireAuth;
