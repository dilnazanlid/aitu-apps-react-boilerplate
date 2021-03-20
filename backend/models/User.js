const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userId: {
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
      required: true,
      max: Date.now
    },
    location: {
      type: String
    },
    gender: {
      type: String,
      enum: ['Мужчина', 'Женщина'],
      required: true
    },
    orientation: {
      type: String,
      required: true
    },
  }, {
    timestamps:true,
  });

const User = mongoose.model('User', userSchema);

module.exports = User;
