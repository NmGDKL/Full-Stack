let lower = document.getElementById("lower");
let upper = document.getElementById("upper");
let digit = document.getElementById("digit");
let buton = document.getElementById("btn");
let result = document.getElementById("result")

buton.addEventListener("click", run)
function run() {
    let myString = [];
    let sayac = 0 ; 
    for (let i = lower.value; i <= upper.value; i++) {
        myString.push(i);   
    }
    myString = String(myString)
     let result1 =  myString.split(digit.value).length -1
     console.log(myString);
    // myString = String(myString)

    // for (i of myString) {
    //      if (i == digit.value) {
    //          sayac += 1
    //      }
    //  }
     result.innerText = result1
    //  console.log(myString);
}

