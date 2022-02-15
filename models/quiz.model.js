const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const optionSchema = Schema({
  text: { type: String, required: true },
  isRight: { type: Boolean, required: true },
});

const questionSchema = Schema({
  question: { type: String, required: true },
  points: { type: Number, required: true },
  negativePoints: Number,
  options: { type: [optionSchema], required: true },
});

const quizSchema = Schema({
  quizName: { type: String, required: true },
  playTime: { type: Number, required: true },
  totalQuestions: { type: Number, required: true },
  totalPoints: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  questions: { type: [questionSchema], required: true },
});

const Quiz = model("Quiz", quizSchema);

module.exports = Quiz;
