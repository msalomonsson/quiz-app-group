const highScoresList = document.querySelector(".score-place");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];


const removeLocalBtn = document.querySelector('.btnDeleteLocal').addEventListener('click', (e)=>{
    highScoresList.innerHTML = '';
    localStorage.clear()
} )




highScoresList.innerHTML = highScores
.map( score => {
    return `<li class="place-name">${score.name}<span>${score.score}</span></li>`;
})
.join("");







