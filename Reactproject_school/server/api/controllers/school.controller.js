const SchoolService = require('../services/school.service');
var School = require('../models/school.model');
exports.getSchools = async function (req, res, next) 
{  
  // Check the existence of the query parameters, If the exists doesn't exists assign a default value
  let page = req.query.page ? req.query.page : 1;
  let limit = req.query.limit ? req.query.limit : 10;
  try {
    let schools = await SchoolService.getSchools({}, page, limit);
    // console.log(schools);
    // Return the users list with the appropriate HTTP Status Code and Message.
    return res.status(200).json({ status: 200, data: schools, message: "Successfully Schools Received" });
  } 
  catch (e) 
  {
    //Return an Error Response Message with Code and the Error Message.
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.createSchool = async function (req, res, next) 
{
  // Req.Body contains the form submit values.
  let school = {schoolName: req.body.schoolName,};
  console.log("i will see created school"); 
  console.log(school);
  try {
    // Calling the Service function with the new object from the Request Body
    let createdSchool = await SchoolService.createdSchool(school);
    
    console.log(createdSchool);
    return res.status(201).json({ status: 201, data: createdSchool, message: "Successfully Created User" })
  } 
  catch (e) 
  {
    //Return an Error Response Message with Code and the Error Message.
    return res.status(400).json({ status: 400, message: "School Creation was Unsuccessfully" })
  }
};


exports.editSchool = async function (req, res, next) 
{ 
  if (!req.params.id) 
  {
    return res.status(400).json({ status: 400, message: "Id must be present" })
  }

  let id = req.params.id;
  let school = {id, schoolName: req.body.schoolName || null,};
  try {
    let schoolData = await SchoolService.editSchool(id);
    // Return the users list with the appropriate HTTP Status Code and Message.
    return res.status(200).json({ status: 200, data: schoolData, message: "Successfully Users edited" });
  } 
  catch (e) 
  {
    //Return an Error Response Message with Code and the Error Message.
    return res.status(400).json({ status: 400, message: e.message });
  }

};

exports.updateSchool = async function (req, res, next) {
  // Id is necessary for the update
  if (!req.body._id) 
  {
    return res.status(400).json({ status: 400, message: "Id must be present" })
  }
  let id = req.body._id;
  let school = {id,schoolName: req.body.schoolName || null}; 
  try 
  {
    let updatedSchool = await SchoolService.updateSchool(school);
    return res.status(200).json({ status: 200, data: updatedSchool, message: "Successfully Updated User" })
  } 
  catch (e) 
  {
    return res.status(400).json({ status: 400, message: e.message })
  }
};
exports.removeSchool = async function (req, res, next) {
  let id = req.params.id;
  try {
    let deleted = await SchoolService.deleteSchool(id);
    return res.status(204).json({ status: 204, message: "Successfully User Deleted" })
  } 
  catch (e) 
  {
    return res.status(400).json({ status: 400, message: e.message })
  }
};