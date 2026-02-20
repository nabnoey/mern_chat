const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

// http://localhost:5000/api/v1/user/register
router.post("/signup", userController.signUp);
router.post("/login", userController.login);
router.post("/logOut", userController.logOut);
router.get("/check", userController.checkAuth);
module.exports = router;
