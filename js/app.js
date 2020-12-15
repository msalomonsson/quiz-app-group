import Data from './data.js'
import Game from './game.js'
import Ui from './userInterFace.js'

(function app(){

    
    Data.getJokes()
    .then(data => {
        const game = new Game;


    
        game.startGame(data)
        game.nextQuestion(data)
    })

   
}())
