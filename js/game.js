import Data from './data.js'
import data from './data.js'
import Ui from './userInterFace.js'
import {showTimer} from './timer.js'


class Game {
  constructor(){
    this.questionText = document.querySelector('#question')

    this.aText = document.querySelector('.a-text')
    this.bText = document.querySelector('.b-text')
    this.cText = document.querySelector('.c-text')
    this.dText = document.querySelector('.d-text')

    this.choises = Array.from(document.getElementsByClassName('choice-container'));

    this.score = document.querySelector("#score");
    this.progressText = document.querySelector("#progressText");
    this.progressBarFull = document.querySelector("#progressBarFull");

    this.score = document.querySelector('#score');
    
    this.currentQuiz = 0;
    this.currentScore = 0;
    this.maxQuestions = 5;
  }
  

  startGame(questionObj){
    showTimer() 
    
    this.questionText.innerHTML = questionObj.results[this.currentQuiz].question

    this.aText.innerHTML = questionObj.results[this.currentQuiz].correct_answer;
    this.bText.innerHTML = questionObj.results[this.currentQuiz].incorrect_answers[0];
    this.cText.innerHTML = questionObj.results[this.currentQuiz].incorrect_answers[1];
    this.dText.innerHTML = questionObj.results[this.currentQuiz].incorrect_answers[2];
      
  }

    
  nextQuestion(questionObj){
    this.choises.forEach((choice) => {
      choice.addEventListener('click', (e) => {
        this.currentQuiz++  

        console.log(e.target.innerHTML)

        this.progressText.innerText = `Question ${this.currentQuiz}/${this.maxQuestions}`;
        this.progressBarFull.style.width = `${
          (this.currentQuiz / this.maxQuestions) * 100
        }%`;


        if(e.target.lastElementChild.innerHTML === questionObj.results[(this.currentQuiz)-1].correct_answer || e.target.innerHTML === questionObj.results[(this.currentQuiz)-1].correct_answer){ 

          this.currentScore++
          this.score.innerHTML = this.currentScore;
          
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

          localStorage.setItem('mostRecentScore', this.currentScore);
            
          setTimeout(() => {
              return window.location.assign('/end.html');
          }, 1000);
            
        }
      })
    })   
  }
}



export default Game
