const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: Number,
  department: String
});

module.exports = mongoose.model('Student', studentSchema);