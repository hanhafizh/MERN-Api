const express = require("express");

const router = express.Router();

const authControlleer = require("../controllers/auth");

// [POST] : http://localhost:4000/v1/auth/register
router.post("/register", authControlleer.register);

module.exports = router;
