
function digitalClock(){
    let data = new Date();
    let hours = data.getHours();
    let minutes = data.getMinutes();
    let seconds = data.getSeconds();
    let flag = "AM";
    
    if(hours == 0){
        hours = 12
    }
    if(hours > 12 ){
        hours = hours - 12;
        flag = "PM";
    }
     if(hours < 10 )hours = "0" + hours;
     if(minutes < 10 )minutes = "0" + minutes;
     if(seconds < 10 )seconds = "0" + seconds;
    document.querySelector('.clock').innerHTML =` ${hours}: ${minutes}: ${seconds}: ${flag}`;
    setTimeout(() => {
        digitalClock()
    }, 1000)
    
}

digitalClock();