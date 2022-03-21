var msg1 = document.getElementById("message1")  
var msg2 = document.getElementById("message2")  
var msg3 = document.getElementById("message3")  
var answer = Math.floor(Math.random()*100) + 1;  
var no_of_guesses = 0;  
var guesses_num = [];  
function play(){  
  var user_guess = document.getElementById("guess").value;  
  if(user_guess < 1 || user_guess > 100 ){  
    alert("Lütfen 1 ile 100 arasında bir sayı giriniz");  
  }  
  else{  
    guesses_num.push(user_guess);  
    no_of_guesses++;  
    if(user_guess < answer){  
 msg1.textContent = "Tahmininiz Çok Düşük"  
 msg2.textContent = "Tahmin Sayısı :" +  
 no_of_guesses;  
 msg3.textContent = "Tahmin Edilen Sayılar:" +  
 guesses_num;  
    }  
    else if(user_guess > answer){  
      msg1.textContent = "Tahmininiz Çok Yüksek"  
      msg2.textContent = "Tahmin Sayısı :" +  
      no_of_guesses;  
      msg3.textContent = "Tahmin Edilen Sayılar:" +  
      guesses_num;  
    }  
    else if(user_guess == answer){  
      msg1.textContent = "Yahhhh kazandın!!!"  
      msg2.textContent = "sayı :" + answer  
      msg3.textContent = no_of_guesses  +" tahmin" + " içinde sonuca ulaştınız.";   
    }  
  }  
}  