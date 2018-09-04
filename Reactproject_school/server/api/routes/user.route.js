const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user.model');
// Getting the User Controller,SChoolController
const UserController = require('../controllers/user.controller');

// Map each API to the Controller Functions
router.post('/authenticate', UserController.authenticate);
router.post('/register', UserController.createUser);


router.get('/', UserController.getUsers);
router.get('/:id', UserController.editUser);
// router.put('/update/:id', UserController.updateUser);
router.put('/update/:id', function (req, res, next) 
{
  User.findByIdAndUpdate(req.params.id, req.body, function (err, post) 
  {
    if (err) return next(err);
    res.json(post);
  });
});

router.delete('/delete/:id', UserController.removeUser);

// Export the Router
module.exports = router;