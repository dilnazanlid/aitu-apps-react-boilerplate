const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const interestSchema = new Schema({
    currentStatus: {
      type: String,
      required: true
    },
  }, {
    timestamps:true,
  });
