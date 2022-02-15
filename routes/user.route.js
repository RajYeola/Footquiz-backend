const express = require("express");
const {
  getUser,
  createNewUser,
  signinUser,
} = require("../controllers/user.controller");
const router = express.Router();

router.get("/", getUser);
router.post("/signup", createNewUser);
router.post("/signin", signinUser);

module.exports = router;
