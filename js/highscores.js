import Ui from './userInterFace.js'

class highScore {

    static setHighScore() {
    
        const highScoresList = document.querySelector(".score-place");
        const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  
        const removeLocalBtn = document.querySelector(".btnDeleteLocal");
        removeLocalBtn.addEventListener("click", (e) => {
            highScoresList.innerHTML = "";
            localStorage.clear();
        });
        console.log(highScores)
        highScoresList.innerHTML = highScores.map(score => {
            return `<li class="place-name">${score.name}<span>${score.score}</span></li>`;
        })
        .join("");

        Ui.showHomeBtnFromHigh()
    }
}
  
export default highScore