const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const School = require('../models/school.model');

exports.createdSchool = async function (school) 
{
  // Creating a new Mongoose Object by using the new keyword
  let newSchool = new School({schoolName: school.schoolName,
    // schoolData: [
    //   { year: '' , month: '' , week: '', elect_eur: '' , elect_kwh: '',  heating_eur: '', heating_kwh: '' , water_eur: '' , water_litres: '' }

    // ]
  });

  // console.log("please see this location");
  // console.log(newSchool)

  try 
  {
    // Saving the School
    let savedSchool = await newSchool.save();
    return savedSchool;
  } 
  catch (e) 
  {
    // return an Error message describing the reason
    throw Error("Error while Creating School");
  }
};

exports.getSchools = async function (req, res) 
{
  try 
  {
    let school = await School.find();

    // Return the user list that was returned by the mongoose promise
    return school;
  } 
  catch (e) 
  {
    // return a Error message describing the reason
    throw Error('Error while Paginating Users');
  }
};

// getSchoolById
exports.editSchool = async function (id) 
{

  try {
    //Find the old User Object by the Id
    school = await School.findById(id);
    return school;
  } 
  catch (e) 
  {
    throw Error("Error occured while Finding the school");
  }
};

exports.updateSchool = async function (school) 
{
  let id = school.id;
  let oldSchool;

  try {
    //Find the old User Object by the Id
    oldSchool = await School.findById(id);
  } catch (e) {
    throw Error("Error occured while Finding the school");
  }

  // If no old User Object exists return false
  if (!oldSchool) 
  {
    return false;
  }

  //Edit the User Object
  oldSchool.schoolName = user.schoolName || oldSchool.schoolName;
  // oldUser.lastName = user.lastName || oldUser.lastName;
  // oldUser.avatar = user.avatar || oldUser.avatar;

  try 
  {
    let savedSchool = await oldSchool.save();
    return savedSchool;
  } 
  catch (e) 
  {
    throw Error("And Error occured while updating the User");
  }
};

exports.removeSchool = async function (id) {

  // Delete the School
  try {
    let deleted = await School.remove({ _id: id });
    if (deleted.result.n === 0) {
      throw Error("User Could not be deleted");
    }
    return deleted;
  } 
  catch (e) 
  {
    throw Error("Error Occured while Deleting the User")
  }
};