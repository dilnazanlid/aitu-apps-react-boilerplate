const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
      type: String,
      required: true,
      unique: true,
      minlength: 3
    },
    phone: {
      type: String,
      required: true,
      unique: true
    },
    dateofbirth: {
      type: Date,
      required: true
    },
    city: {
      type: String
    },
  }, {
    timestamps:true,
  });

const User = mongoose.model('User', userSchema);

module.exports = User;
