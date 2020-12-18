import Game from './game.js'
import Ui from './userInterFace.js'
import highScore from './highscores.js'
class End {
    
    static selectors = {
        username: document.getElementById("username"),
        saveScoreBtn: document.getElementById("saveScoreBtn"),
        finalScore: document.getElementById("finalScore"),
        mostRecentScore: localStorage.getItem("mostRecentScore")
    }

    static endFunction(){
        console.log(localStorage)
        this.selectors.finalScore.innerText = Game.state.score

        this.selectors.username.addEventListener('keyup', () => {
            this.selectors.saveScoreBtn.disabled = !this.selectors.username.value
        })

        this.selectors.saveScoreBtn.addEventListener('click',(e)=>{
            e.preventDefault();
            console.log('working')
            let highscore = JSON.parse(localStorage.getItem("highScores")) || []
            
            const score = {
                score: this.selectors.mostRecentScore,
                name: this.selectors.username.value
            };
            
            highscore.push(score);

            highscore.sort((a, b) => b.score - a.score);
            highscore.splice(5)

            localStorage.setItem("highScores", JSON.stringify(highscore));
            highScore.setHighScore();
            Ui.Endpage('none')
            Ui.highscore('block')
        })

        

        Ui.showHomeBtn()
    }
}


export default End
