import Data from './data.js'
import Game from './game.js'
import Ui from './userInterFace.js'




(function app(){
    console.log('working')
    
    let levelValue = 'hard';


    Data.getJokes(levelValue)
    .then(data => {
        const game = new Game;
        
        game.startGame(data) 
        game.nextQuestion(data)
    })


   



    const playBtn = document.querySelector('.play-btn');
    const dropdownUl = document.querySelector('.dropdown')

    playBtn.addEventListener('click', dropdownMenu);
    function dropdownMenu(event) {

        if (dropdownUl.style.display == 'block') {
            dropdownUl.style.display = 'none';
        } else {
            dropdownUl.style.display = 'block';
        }
    }


}())


   


