const express = require("express");

const router = express.Router();

const authControlleer = require("../controllers/auth");

router.post("/register", authControlleer.register);

module.exports = router;
