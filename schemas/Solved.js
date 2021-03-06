const mongoose = require('mongoose');
const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;

const solvedSchema = new Schema({
  wargameId: {
    type: ObjectId,
    required: true,
    ref: 'Wargame',
  },
  whoSolved: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Solved', solvedSchema);
