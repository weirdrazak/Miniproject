const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/student');

router.get('/:studentID', studentsController.getStudentById);
router.post('/', studentsController.registerStudent);

module.exports = router;
