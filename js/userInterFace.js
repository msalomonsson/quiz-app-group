import Game from './game.js'

class Ui {
    static renderToDom(){
        /* Dom Loaded Eventlistner */
        window.addEventListener('DOMContentLoaded', renderQA);

        function renderQA(){
            /* Small functions go here */
            renderQuestion()
        }

        /* Small Functions */
        async function renderQuestion(){
            const questionTextHTML = document.querySelector('#question');
            
           const array = await Game.getQuestions();
           console.log(array)
        }
        /****************************************/
    }
}

export default Ui;