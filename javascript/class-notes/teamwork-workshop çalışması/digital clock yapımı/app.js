const hour = document.getElementById("h");
const minute = document.getElementById("m");
const second = document.getElementById("s");
const meridiem = document.getElementById("x");

function updateTime(){
    hour.innerText = (new Date().getHours()).toString().padStart(2,"0");
    minute.innerText = (new Date().getMinutes()).toString().padStart(2,"0");
    second.innerText = (new Date().getSeconds()).toString().padStart(2,"0");
    if(hour.innerText < 12){
        x.innerText = "AM"
    }
    else{
        hour.innerText =(hour.innerText - 12).toString().padStart(2,"0");
        x.innerText = "PM"
    }
}

 setInterval(updateTime,1000);

