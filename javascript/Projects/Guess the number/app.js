let myNumber = Math.trunc(Math.random() * 100 + 1);
console.log(myNumber);

let userNumber = document.querySelector("#sayı");
let maxNumber = 100;
let minNumber = 1;
let myButton = document.querySelector("#check");
let i = 0;

let resim = document.querySelector('.img');


myButton.addEventListener("click", () => { 
    i++;  
    if (+userNumber.value < myNumber) {
      minNumber = +userNumber.value;
      document.getElementById(
        "ikaz"
      ).innerText = ` Enter a number between ${minNumber} and ${maxNumber}`;
      document.getElementById("count-span").innerText = i;
    } else if (+userNumber.value > myNumber) {
      maxNumber = +userNumber.value;
      document.getElementById(
        "ikaz"
      ).innerText = ` Enter a number between ${minNumber} and ${maxNumber}`;
      document.getElementById("count-span").innerText = i;
    } else if (+userNumber.value == myNumber) {
      resim.style.display = 'block';  
      document.getElementById("ikaz").innerText = ` Congratulations. You win ${i}. attempt!`;
      document.getElementById("count-span").innerText = i;
    }  
});