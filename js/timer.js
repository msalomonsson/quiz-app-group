
 const showTimer = () => {
     
    let timeLeft = 60;
        let timer = setInterval(function(){
        if(timeLeft <= 0){
            clearInterval(timer);
            document.getElementById("time-left").innerHTML = "Finished";
        } else {
            document.getElementById("time-left").innerHTML = timeLeft;
        }
        timeLeft -= 1;
        }, 1000);
        
    }
export {
showTimer
};


showTimer()
