function printTime(){

    var date = new Date();
    
    //time
    var hour = date.getHours();
    if (hour > 12) {
        hour = hour - 12;        
    }
    var min = date.getMinutes();
    var sec = date.getSeconds();
    
    //to ensure dual digit display  
    hour = (hour < 10) ? `0${hour}` : hour;
    min = (min < 10) ? `0${min}` : min;
    sec = (sec < 10) ? `0${sec}` : sec;
    
    var p = document.getElementById('dispTime');

    if (hour > 12) {
        p.innerText = `${hour}:${min}:${sec} PM`;        
    }
    else{
        p.innerText = `${hour}:${min}:${sec} AM`;
    }
}

//To repeat
setInterval(printTime, 1000);
