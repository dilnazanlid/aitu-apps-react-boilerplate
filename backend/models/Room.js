const {Schema, model, Types} = require('mongoose')

const roomSchema = new Schema({
    admin: {
      type: Types.ObjectId,
      ref: 'User',
      required: true
    },
    quantity: {
      type: Number,
      max: 10,
      min: 2,
      required: true
    },
    duration: {
      type: Number,
      max: 20,
      min: 1,
      required: true
    },
    topics: [{
      topic: {
        type: Types.ObjectId,
        ref: 'Topic'
      },
    }],
    users: [{
      userId: {
        type: Types.ObjectId,
        ref: 'User'
      },
    }]
  }, {
    timestamps:true,
  });

  const Room = model('Room', roomSchema);

  module.exports = Room;
