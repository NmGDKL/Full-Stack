let datePicker = document.getElementById("birthday");

let loadingImage = document.getElementById("image");


function ageCalc(){

let calcYear = new Date().getFullYear() - new Date(datePicker.value).getFullYear();
let calcMonth = new Date().getMonth() - new Date(datePicker.value).getMonth();
let calcDay = new Date().getDate() - new Date(datePicker.value).getDate();
let calcHour = new Date().getHours() - new Date(datePicker.value).getHours();
let calcMinute = new Date().getMinutes() - new Date(datePicker.value).getMinutes();
let calcSecond = new Date().getSeconds() - new Date(datePicker.value).getSeconds();

if(calcDay < 0){
    calcDay +=30;
    calcMonth -=1;
}
if (calcMonth < 0){
        calcMonth += 12;
        calcYear -= 1;
}

document.querySelector(".age__calculator--years h2").innerText = `${calcYear}`;
document.querySelector(".age__calculator--months h2").innerText = `${calcMonth}`,
document.querySelector(".age__calculator--days h2").innerText = `${calcDay}`;
document.querySelector(".age__calculator--hours h2").innerText = `${calcHour+3}`;
document.querySelector(".age__calculator--minutes h2").innerText = `${calcMinute}`;
document.querySelector(".age__calculator--seconds h2").innerText = `${calcSecond}`;
}
// console.log(ageCalc());
datePicker.addEventListener("change", () =>{
    if(new Date(datePicker.value) > new Date()){
        alert("Bugünün tarihinden büyük bir tarih seçtiniz...")
    }
    else{
    setInterval(ageCalc,1000);
    loadingImage.style.display = "none";
    
    let background = document.querySelector("body");
    background.style.backgroundImage = 'url("https://picsum.photos/id/600/900/600")';
}
});




