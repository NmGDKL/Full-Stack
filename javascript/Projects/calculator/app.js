
let num1, num2, operator;
let screen = document.querySelector(".div17");
let _0 = document.querySelector(".div10");
let _1 = document.querySelector(".div1");
let _2 = document.querySelector(".div2");
let _3 = document.querySelector(".div3");
let _4 = document.querySelector(".div4");
let _5 = document.querySelector(".div5");
let _6 = document.querySelector(".div6");
let _7 = document.querySelector(".div7");
let _8 = document.querySelector(".div8");
let _9 = document.querySelector(".div9");
let _11 = document.querySelector(".div11");
let artı = document.querySelector(".div12");
let eksi = document.querySelector(".div13");
let çarpma = document.querySelector(".div14")
let bölme = document.querySelector(".div15")
let sonuc = document.querySelector(".div16");
let reset = document.querySelector(".div18")

screen.innerText = "";

_0.addEventListener("click", ()=>{
    screen.innerText += "0";
});
_1.addEventListener("click", ()=>{
    screen.innerText += "1";
});
_2.addEventListener("click", ()=>{
    screen.innerText += "2";
});
_3.addEventListener("click", ()=>{
    screen.innerText += "3";
});
_4.addEventListener("click", ()=>{
    screen.innerText += "4";
});
_5.addEventListener("click", ()=>{
    screen.innerText += "5";
});
_6.addEventListener("click", ()=>{
    screen.innerText += "6";
});
_7.addEventListener("click", ()=>{
    screen.innerText += "7";
});
_8.addEventListener("click", ()=>{
    screen.innerText += "8";
});
_9.addEventListener("click", ()=>{
    screen.innerText += "9";
});
_11.addEventListener("click", ()=>{
    screen.innerText += ".";
});



artı.addEventListener("click", ()=>{
    num1 = screen.innerText;
    screen.innerText = "";
    operator = "+";
});

eksi.addEventListener("click", ()=>{
    num1 = screen.innerText;
    screen.innerText = "";
    operator = "-";
});
çarpma.addEventListener("click", ()=>{
    num1 = screen.innerText;
    screen.innerText = "";
    operator = "*";
});
bölme.addEventListener("click", ()=>{
    num1 = screen.innerText;
    screen.innerText = "";
    operator = "/";
});
reset.addEventListener("click", ()=>{
    num1 = screen.innerText;
    screen.innerText = "";
    operator = "";
});






sonuc.addEventListener("click", ()=>{
    num2 = screen.innerText;
    if (operator == "+"){ screen.innerText = (+num1)+(+num2);}
    if (operator == "-"){ screen.innerText = (+num1)-(+num2);}
    if (operator == "*"){ screen.innerText = (+num1)*(+num2);}
    if (operator == "/"){ screen.innerText = (+num1)/(+num2);}
});

