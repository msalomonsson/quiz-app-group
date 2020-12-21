import Game from './game.js';
import highScore from './highscores.js'

class Ui {

    static StartPage(displaySetting){
        const homeContainer = document.querySelector('.home-container');
        homeContainer.style.display = displaySetting
    }

    static gamePage(displaySetting){
        const mainContainer = document.querySelector('.main-container');
        mainContainer.style.display = displaySetting
    }

    static Endpage(displaySetting){
        const endContainer = document.querySelector('.end-container');
        endContainer.style.display = displaySetting;
    }

    static highscore(displaySetting){
        const highscoreContainer = document.querySelector('.highscore-container');
        highscoreContainer.style.display = displaySetting;
    }

    static showHighScoreBtn(){
        const scoresBtn = document.querySelector('.scores-btn').addEventListener('click',(e)=>{
            Ui.StartPage('none')
            highScore.setHighScore()
            Ui.highscore('block')
        })
    }

    static showHomeBtn(){
        const btnHome = document.querySelector('.btnGoHome').addEventListener('click',(e)=>{
            console.log('homework')
            Ui.Endpage('none')
            Ui.StartPage('block')
            location.reload();
        })
    }

    static showHomeBtnFromHigh(){
        const btnHome = document.querySelector('.btnGoHomeFromHigh').addEventListener('click',(e)=>{
            console.log('homework')
            Ui.highscore('none')
            Ui.StartPage('block')
            location.reload();
        })
    }

    static dropDownMenu(){
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
    }

}   

export default Ui