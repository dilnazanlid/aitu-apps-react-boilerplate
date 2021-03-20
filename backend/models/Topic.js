const {Schema, model} = require('mongoose')

const topicSchema = new Schema({
    label: {
      type: String,
    },
  }, {
    timestamps:true,
  });

  const Topic = model('Topic', topicSchema);

  module.exports = Topic;
