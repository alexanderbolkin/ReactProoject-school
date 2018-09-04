const express = require('express');
const router = express.Router();

// Getting the User Controller
const SchoolDataController = require('../controllers/schoolDatas.controller');

// Map each API to the Controller Functions
router.get('/', SchoolDataController.getSchoolDatas);
router.post('/createData', SchoolDataController.createSchoolData);
router.get('/:id', SchoolDataController.editSchoolData);
router.put('/update/:id', SchoolDataController.updateSchoolData);
router.delete('/delete/:id', SchoolDataController.removeSchoolData);


// Export the Router
module.exports = router;