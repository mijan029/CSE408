const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, required: false },
  //username: { type: String, required: true, unique: true },
  phone: { type: String, required: false },
  address: { type: String, required: false },
  salary: { type: Number, required: false },
  hireDate: { type: Date, required: false },
  //password: { type: String, required: true },
  //id: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  branch_id: { type: String, required: true },
  post: { type: String, required: true }
});

userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

module.exports = mongoose.model('User', userSchema);
