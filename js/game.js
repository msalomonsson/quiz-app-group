import Data from './data.js';

class Game {

    /* Function that gets questions and put them in array */
    static async getQuestions(){
        let array = [];
       
        await Data.getJokes().then((data) => {
            
            for(let i = 0; i < data.results.length; i++){
                array.push(data.results[i].question)
                
            }
        }) 
         
        return array
        
    }

    static getAnswers(){

    }
}

Game.getQuestions();
export default Game;