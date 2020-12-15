<<<<<<< HEAD
import Data from './data.js'
import data from './data.js'
import Ui from './userInterFace.js'
=======
import data from "./data.js";
import Ui from "./userInterFace.js";
>>>>>>> 5e28b578c847bf28eaa7d0349be2aee6587bfa69

class Game {
  constructor() {
    this.questionText = document.querySelector("#question");

    this.aText = document.querySelector(".a-text");
    this.bText = document.querySelector(".b-text");
    this.cText = document.querySelector(".c-text");
    this.dText = document.querySelector(".d-text");

<<<<<<< HEAD
        this.choises = Array.from(document.getElementsByClassName('choice-text'));

        this.score = document.querySelector('#score');
        
        this.currentQuiz = 0;
        this.currentScore = 0;
        this.maxQuestions = 9;
    }
    

    startGame(questionObj){
=======
    this.score = document.querySelector("#score");
    this.progressText = document.querySelector("#progressText");
    this.progressBarFull = document.querySelector("#progressBarFull");

    this.currentQuiz = 0;
    this.currentScore = 0;
    this.MAX_QUESTIONS = 10;
  }
>>>>>>> 5e28b578c847bf28eaa7d0349be2aee6587bfa69

  startGame(questionObj) {
    console.log(questionObj.results.length);

    this.questionText = document.querySelector("#question").innerHTML =
      questionObj.results[this.currentQuiz].question;

    
    nextQuestion(questionObj){
        this.choises.forEach((choice) => {
            choice.addEventListener('click', (e) => {
                this.currentQuiz++  
                
                if(e.target.innerHTML === questionObj.results[(this.currentQuiz)-1].correct_answer){  
                    this.currentScore++
                    this.score.innerHTML = this.currentScore;
                    this.progressText.innerText = `Question ${this.currentQuiz}/${this.MAX_QUESTIONS}`;
                    //Update the progress bar
                    this.progressBarFull.style.width = `${
                    (this.currentQuiz / this.MAX_QUESTIONS) * 100
                    }%`;
                    e.target.classList.add('correct')

                    setTimeout(() => {
                        e.target.classList.remove('correct');
                        this.startGame(questionObj);
                    }, 1000);
                    
                }else{
                    e.target.classList.add('incorrect')
                    setTimeout(() => {
                        e.target.classList.remove('incorrect');
                        this.startGame(questionObj);
                    }, 1000);
                }

                if(this.currentQuiz === this.maxQuestions){
                    return window.location.assign('/end.html');
                }
            })
        })
    }
    
}

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

export default Game
