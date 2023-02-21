const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  studentID: {
    type: Number,
    required: true,
    unique: true
  },
  phone: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
