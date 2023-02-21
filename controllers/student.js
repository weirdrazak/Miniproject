const Student = require('../models/student');

exports.getStudentById = async (req, res) => {
  const student = await Student.findOne({ stuentID: req.params.studentID });
  if (!student) return res.status(404).send('Student not found');
  res.send(student);
};

exports.registerStudent = async (req, res) => {
  let student = await Student.findOne({ studentID: req.body.studentID });
  if (student) return res.status(400).send('Student already registered');
  student = new Student({
    name: req.body.name,
    studentID: req.body.studentID,
    phone: req.body.phone,
    email: req.body.email
  });
  await student.save();
  res.status(200).send(student);
};
