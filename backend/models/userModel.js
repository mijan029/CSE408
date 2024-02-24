const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: { type: String, required: false, default: "User"},
  phone: { type: String, required: false, default: "Not Provided"},
  address: { type: String, required: false, default: "Not Provided"},
  salary: { type: Number, required: false, default: 0},
  hireDate: { type: Date, required: false, default: Date.now()},
  email: { type: String, required: true },
  password: { type: String, required: true },
  branch_id: { type: String, required: true },
  post: { type: String, required: true }
})

//static signup method
userSchema.statics.signup = async function(email, password, branch_id, post) {

  //validation
  if(!email || !password || !branch_id || !post) {
    throw new Error('Invalid input');
  }
  // if(!validator.isEmail(email)) {
  //   throw new Error('Invalid email');
  // }
  // if(!validator.isStrongPassword(password)) {
  //   throw new Error('Password is not strong enough');
  // }
  const exists = await this.findOne({ email });
  if (exists) {
    throw Error('User with this email already exists');
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const user = await this.create({ email, password: hash, branch_id, post });
  return user;
};

//static login method 
userSchema.statics.login = async function(email, password) {

  if(!email || !password) {
    throw new Error('Invalid input');
  }
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw new Error('Password is incorrect');
  }
  throw new Error('Email is incorrect');
};

// userSchema.pre('save', async function(next) {
//   if (this.isModified('password')) {
//     this.password = await bcrypt.hash(this.password, 8);
//   }
//   next();
// });

module.exports = mongoose.model('User', userSchema);
