const express = require("express");
const router = express.Router();

// The path needs to go UP one folder (../) and into controllers
const { registerUser } = require("../controllers/auth.controller");

router.post("/register", registerUser);

module.exports = router;
