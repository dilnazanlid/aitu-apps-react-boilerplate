const {Schema, model, Types} = require('mongoose')

const interestSchema = new Schema({
    userId: {
      type: Types.ObjectId,
      ref: 'User',
      required: true
    },
    currentSearchStatus: {
      type: String,
      enum: ['friends', 'couple'],
      required: true
    },
    topics: [{
      topic: {
        type: Types.ObjectId,
        ref: 'Topic'
      },
    }],
    songs: [{
      song: {
        type: String
      },
    }]
  }, {
    timestamps:true,
  });

  const Interest = model('Interest', interestSchema);

  module.exports = Interest;
