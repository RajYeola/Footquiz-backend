const express = require("express");
const {
  getAllQuizzes,
  getIndividualQuiz,
  addQuiz,
} = require("../controllers/quiz.controller");
const { verifyAuth } = require("../middleware/verifyAuth");
const router = express.Router();

router.get("/", getAllQuizzes);
router.post("/", addQuiz);
router.get("/:quizID", verifyAuth, getIndividualQuiz);

module.exports = router;
