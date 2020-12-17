
 const showTimer = () => {
     
    let timeLeft = 1000;
        let timer = setInterval(function(){
        if(timeLeft < 0){
            clearInterval(timer);
            window.location.assign('/end.html')
        } else {
            document.querySelector(".timer").innerHTML = timeLeft;
        }
        timeLeft -= 1;
        }, 1000);
        
    }
export {
showTimer
};


