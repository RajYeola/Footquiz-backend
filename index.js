const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const quizRouter = require("./routes/quiz.route");
const userRouter = require("./routes/user.route");

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.json({ message: "Welcome to footquiz API" });
});

app.use("/quiz", quizRouter);
app.use("/user", userRouter);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    })
  )
  .catch((error) => console.log(error.message));
