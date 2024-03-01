const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { homePage, submit, registeredUsers, showDetails } = require('../controllers/home');

router.get("/", homePage)
router.get("/showDetails", showDetails)
router.get("/registeredUsers", registeredUsers)
router.post('/submit', submit);

module.exports = router;
