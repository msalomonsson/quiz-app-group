import Ui from './userInterFace.js'
import End from './end.js'
import highScore from './highscores.js'


class Game {
  static state = {
    currentquestion: 0,
    questions: [],
    score: 0,
    maxQuestions: 3,
    rightAnswerString: '',
  }

  static selectors = {
    choicesText: document.querySelectorAll('.choice-text'),
    questionText: document.querySelector('.ques'),
    choiceContainers: document.querySelectorAll('.choice-container'),
    scoreNum: document.querySelector('.scoreNumber'),
    progressText: document.querySelector("#progressText"),
    progressBarFull: document.querySelector("#progressBarFull"),
    categoryText: document.querySelector('.category')
  }
  
  static game(level){
      fetch(`https://opentdb.com/api.php?amount=3&difficulty=${level}&type=multiple`).then(res => res.json()).then((data) => {
          this.state.questions = data.results.map((data) => {
              const questionsFormatted = {
                  question: data.question.replaceAll('&quot;', '"').replaceAll('&#039;', "'"). replaceAll('&amp;', '&'),
                  correctAnswer: data.correct_answer.replaceAll('&quot;', '"').replaceAll('&#039;', "'"),
                  wrongAnswers: [...data.incorrect_answers],
                  difficulty: data.difficulty,
                  category: data.category
              }
              console.log(questionsFormatted.correctAnswer)
              return questionsFormatted;
          });
          console.log(this.state.questions)
          this.startGame()
      })
  }

  static timer(time){
    let counter = time;
    let timer = setInterval(function(){
    if(counter === 0){
      clearInterval(timer);
      Ui.gamePage('none')
      Ui.Endpage('block')
      End.endFunction()
    }
    else {
      document.querySelector(".timer").innerHTML = counter;
    }
    counter -= 1;
    }, 1000);
  }

  static startGame(){
    
    this.loadCategory(this.state.currentquestion)
    this.loadQuestion(this.state.currentquestion)
    this.loadAnswers(this.state.currentquestion)
    this.timer(6000)
    this.eventChangeQuestion();
  }

  static loadCategory(currentIndex){
    this.selectors.categoryText.textContent = this.state.questions[currentIndex].category
  }

  static loadQuestion(currentIndex){
    const questionText = this.selectors.questionText;
    questionText.textContent = this.state.questions[currentIndex].question;
  }

  static loadAnswers(currentIndex){
      const choices = this.selectors.choicesText;
      const random = Math.floor(Math.random() * 4);
      const wrongChoices = Array.from(choices);
      choices[random].textContent = this.state.questions[currentIndex].correctAnswer
      wrongChoices.splice(random, 1)
      this.state.rightAnswerString = this.state.questions[currentIndex].correctAnswer
      for(let i = 0; i < wrongChoices.length; i++){
        wrongChoices[i].textContent = this.state.questions[currentIndex].wrongAnswers[i];
      }
  }

  static rightOrWrong(className, time, element, colorLetter){
    element.classList.add(className)
    if(className === 'incorrect'){
      colorLetter.previousElementSibling.setAttribute(
        "style",
        "box-shadow: 2px 2px 5px var(--shadow), inset 2px 2px 5px rgb(156, 13, 8)"
      );
    }

    setTimeout(() => {
      element.classList.remove(className)
      colorLetter.previousElementSibling.setAttribute(
        "style",
        "box-shadow: 2px 2px 5px var(--shadow), inset 2px 2px 5px #14d69a;"
      );
      this.loadNextQuestion()
    }, time);
  }

  static loadNextQuestion(){
      this.loadQuestion(this.state.currentquestion)
      this.loadAnswers(this.state.currentquestion)
      this.loadCategory(this.state.currentquestion)
      localStorage.setItem('mostRecentScore', this.state.score);
  }

  static eventChangeQuestion(){
    const choicesContainers = this.selectors.choiceContainers;
    /* let className = 'incorrect'; */
    choicesContainers.forEach((choiceContainer) => {
        choiceContainer.addEventListener('click', (e) => {
          this.state.currentquestion++
          
          this.selectors.progressText.innerText = `Question ${this.state.currentquestion}/${this.state.maxQuestions}`;
          
          this.selectors.progressBarFull.style.width = `${
            (this.state.currentquestion / this.state.maxQuestions) * 100
          }%`;  

          if(e.target.textContent === this.state.rightAnswerString){
            this.state.score++
            this.selectors.scoreNum.textContent = this.state.score
            
            
            this.rightOrWrong('correct', 1000, e.target.parentElement, e.target);
          } else {
            this.rightOrWrong('incorrect', 1000, e.target.parentElement, e.target);
          }
      

          if(this.state.currentquestion === this.state.maxQuestions){

            localStorage.setItem('mostRecentScore', this.state.score);
            
            End.endFunction()
            setTimeout(() => {
              Ui.gamePage('none')
              Ui.Endpage('block')
            }, 1000);
          }
          

        })
    })
  }

}
export default Game;