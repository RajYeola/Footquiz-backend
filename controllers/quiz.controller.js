const Quiz = require("../models/quiz.model");

const getAllQuizzes = async (req, res) => {
  try {
    const allQuizzes = await Quiz.find({});

    res.json({ success: true, allQuizzes });
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
};

const addQuiz = async (req, res) => {
  try {
    const quiz = req.body;
    const newQuiz = await new Quiz(quiz);
    const savedQuiz = await newQuiz.save();

    res.json({ success: true, savedQuiz });
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to add a new quiz",
      errorMessage: error.message,
    });
  }
};

const getIndividualQuiz = async (req, res) => {
  try {
  } catch (error) {}
};

module.exports = { getAllQuizzes, getIndividualQuiz, addQuiz };
