const express = require("express");
const router = express.Router();

const { userLogin, userSignup } = require("../controllers/usersController");

router.post("/login", userLogin);
router.post("/signup", userSignup);

module.exports = router;
