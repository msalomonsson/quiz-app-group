
 const showTimer = () => {
     
    let timeLeft = 10;
        let timer = setInterval(function(){
        if(timeLeft <= 0){
            clearInterval(timer);
        } else {
            document.querySelector(".timer").innerHTML = timeLeft;
        }
        timeLeft -= 1;
        }, 1000);
        
    }
export {
showTimer
};


