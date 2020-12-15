import data from "./data.js";
import Ui from "./userInterFace.js";

class Game {
  constructor() {
    this.questionText = document.querySelector("#question");

    this.aText = document.querySelector(".a-text");
    this.bText = document.querySelector(".b-text");
    this.cText = document.querySelector(".c-text");
    this.dText = document.querySelector(".d-text");

    this.score = document.querySelector("#score");
    this.progressText = document.querySelector("#progressText");
    this.progressBarFull = document.querySelector("#progressBarFull");

    this.currentQuiz = 0;
    this.currentScore = 0;
    this.MAX_QUESTIONS = 10;
  }

  startGame(questionObj) {
    console.log(questionObj.results.length);

    this.questionText = document.querySelector("#question").innerHTML =
      questionObj.results[this.currentQuiz].question;

    this.aText.innerHTML = questionObj.results[this.currentQuiz].correct_answer;
    this.bText.innerHTML =
      questionObj.results[this.currentQuiz].incorrect_answers[0];
    this.cText.innerHTML =
      questionObj.results[this.currentQuiz].incorrect_answers[1];
    this.dText.innerHTML =
      questionObj.results[this.currentQuiz].incorrect_answers[2];
  }

  nextQuestion(questionObj) {
    this.aText.addEventListener("click", (e) => {
      this.currentQuiz++;

      if (
        (this.aText.innerHTML =
          questionObj.results[this.currentQuiz].correct_answer)
      ) {
        this.currentScore++;
        this.score.innerHTML = this.currentScore;
        this.progressText.innerText = `Question ${this.currentQuiz}/${this.MAX_QUESTIONS}`;
        //Update the progress bar
        this.progressBarFull.style.width = `${
          (this.currentQuiz / this.MAX_QUESTIONS) * 100
        }%`;
      } else {
        console.log("wrong");
      }
    });
    this.bText.addEventListener("click", (e) => {
      this.currentQuiz++;
      this.startGame(questionObj);
    });
    this.cText.addEventListener("click", (e) => {
      this.currentQuiz++;

      this.startGame(questionObj);
    });
    this.dText.addEventListener("click", (e) => {
      this.currentQuiz++;

      this.startGame(questionObj);
    });
  }
}

export default Game;
