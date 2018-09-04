const express = require('express');
const router = express.Router();
var School = require('../models/school.model');
// Getting the User Controller
const SchoolController = require('../controllers/school.controller');
// Map each API to the Controller Functions
router.get('/getAll', SchoolController.getSchools);
router.post('/create', SchoolController.createSchool);
router.get('/:id', SchoolController.editSchool);
router.put('/update/:id', SchoolController.updateSchool);
router.delete('/delete/:id', SchoolController.removeSchool);
// Export the Router
module.exports = router;