const express = require("express");
const router = express.Router();
const authController = require(".../controllers/auth.conntroller");
const secure = require("../middlewares/secure.mid");


//get homepage
router.get("/", "login", authController.login);
router.post("/login", authController.doLogin);


module.exports = router;