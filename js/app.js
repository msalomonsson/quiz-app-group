/* Importing classes */
import Game from './game.js'
import Ui from './userInterFace.js'
import highScore from './highscores.js'
import End from './end.js'

(function app(){
    

    const linkItems = document.querySelectorAll('.link-item');
    linkItems.forEach((link) => {
        link.addEventListener('click', (e) => {
            
            if(e.target.classList.contains('easy-item')){
                Ui.StartPage('none')
                Ui.gamePage('block')
                Game.game('easy')
            }

            if(e.target.classList.contains('medium-item')){
                console.log('medium working')
                Ui.StartPage('none')
                Ui.gamePage('block')
                Game.game('medium')
            }

            if(e.target.classList.contains('hard-item')){
                console.log('hard working')
                Ui.StartPage('none')
                Ui.gamePage('block')
                Game.game('hard')
            }
        })
    })
    Ui.dropDownMenu()
    Ui.showHighScoreBtn()
    

    
}())


   


