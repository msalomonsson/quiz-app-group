/* Importing classes */

import Game from './game.js'

(function app(){
    
    // const easyBtn = document.querySelector('.link-item-easy')
    // easyBtn.addEventListener('click',(e) => {
    //     window.location.assign('game.html')
    //     Game.game('easy')
    // }) 

    Game.game('hard')

    /* Dropdown */
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


   


