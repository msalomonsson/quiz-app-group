
import {showTimer} from './timer.js'

class Game {
    static state = {
      currentquestion: 0,
      questions: [],
      score: 0,
      maxQuestions: 10,
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
        fetch(`https://opentdb.com/api.php?amount=10&difficulty=${level}&type=multiple`).then(res => res.json()).then((data) => {
            
            this.state.questions = data.results.map((data) => {
                const questionsFormatted = {
                    question: data.question,
                    correctAnswer: data.correct_answer,
                    wrongAnswers: [...data.incorrect_answers],
                    difficulty: data.difficulty,
                    category: data.category
                }
                console.log(questionsFormatted)
                return questionsFormatted;
            });
            
            this.startGame()
        })
    }

    static startGame(){
      
      showTimer()
      this.loadCategory(this.state.currentquestion)
      this.loadQuestion(this.state.currentquestion)
      this.loadRightAnswer(this.state.currentquestion)
      this.loadWrongAnswers(this.state.currentquestion)
      this.eventChangeQuestion();
    }

    static loadCategory(currentIndex){
      this.selectors.categoryText.textContent = this.state.questions[currentIndex].category
    }

    static loadQuestion(currentIndex){
      const questionText = this.selectors.questionText;
      questionText.textContent = this.state.questions[currentIndex].question;
    }

    static loadRightAnswer(currentIndex){
        const choices = this.selectors.choicesText;
        const random = Math.floor(Math.random() * 4)
        console.log(this.state.questions[currentIndex].correctAnswer)
        choices[random].textContent = this.state.questions[currentIndex].correctAnswer
        choices.forEach((choice) => {
            if(choice.textContent == this.state.questions[currentIndex].correctAnswer){
                choice.classList.add('Right')
            }

        })
    }

    static loadWrongAnswers(currentIndex){
        const choices = this.selectors.choicesText;
        const wrongAnswers = this.state.questions[currentIndex].wrongAnswers

        let wrongChoiceArray = []
        choices.forEach((choice) => {
            if(!choice.classList.contains('Right')){
                choice.classList.add('Wrong')
                wrongChoiceArray.push(choice)
            }
        })

        for(let i = 0; i < wrongChoiceArray.length; i++){
            if(i == 0){
                wrongChoiceArray[i].textContent = wrongAnswers[0]
            }
            if(i == 1){
                wrongChoiceArray[i].textContent = wrongAnswers[1]
            }
            if(i == 2){
                wrongChoiceArray[i].textContent = wrongAnswers[2]
            }
        }
    }

    static eventChangeQuestion(){
        const choicesContainers = this.selectors.choiceContainers;
        const choices = this.selectors.choicesText;
        choicesContainers.forEach((choiceContainer) => {
            choiceContainer.addEventListener('click', (e) => {
              this.state.currentquestion++
              
              this.selectors.progressText.innerText = `Question ${this.state.currentquestion}/${this.state.maxQuestions}`;

              this.selectors.progressBarFull.style.width = `${
                (this.state.currentquestion / this.state.maxQuestions) * 100
              }%`;  

              if(e.target.classList.contains('Right')){
                this.state.score++ 
                this.selectors.scoreNum.textContent = this.state.score
                e.target.parentElement.classList.add('correct')

                
                choices.forEach((choice) => {
                  choice.classList.remove('Right')
                  choice.classList.remove('Wrong')
                })
                
                setTimeout(() => {
                  e.target.parentElement.classList.remove('correct')
                  e.target.textContent = ''
                  this.loadQuestion(this.state.currentquestion)
                  this.loadRightAnswer(this.state.currentquestion)
                  this.loadWrongAnswers(this.state.currentquestion)
                  this.loadCategory(this.state.currentquestion)
                  localStorage.setItem('mostRecentScore', this.state.score);
                }, 1000);

              } else {
                
                e.target.parentElement.classList.add('incorrect')

                choices.forEach((choice) => {
                  choice.classList.remove('Right')
                  choice.classList.remove('Wrong')
                })

                setTimeout(() => {
                  e.target.parentElement.classList.remove('incorrect')
                  e.target.textContent = ''
                  this.loadQuestion(this.state.currentquestion)
                  this.loadRightAnswer(this.state.currentquestion)
                  this.loadWrongAnswers(this.state.currentquestion)
                  this.loadCategory(this.state.currentquestion)
                  localStorage.setItem('mostRecentScore', this.state.score);
                }, 1000);
              }
              
              if(this.state.currentquestion === this.state.maxQuestions){

                localStorage.setItem('mostRecentScore', this.state.score);

                setTimeout(() => {
                  return window.location.assign('/end.html');
                }, 1000);
              }
              

            })
        })
    }

}
export default Game;