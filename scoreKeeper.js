// alert("connected");
var p1button = document.getElementById("p1");
var p2button = document.querySelector("#p2");
var rbutton = document.querySelector("#reset");
var num = document.querySelector("input");
var p = document.querySelector("#num");
var p1score = 0;
var p2score = 0;
// var inputvalue = 0;
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var gameOver = false;
var final = 5;


p1button.addEventListener("click",function(){
    if(!gameOver){
        p1score++;
        if(p1score === final){
            p1display.classList.add("winner");
            gameOver = true;
        }
    p1display.textContent=p1score;  
    } 
});

p2button.addEventListener("click",function(){
    if(!gameOver){
        p2score++;
        if(p2score === final){
            p2display.classList.add("winner");
            gameOver = true;
        }
        p2display.textContent = p2score;   
    }
});

rbutton.addEventListener("click",function(){
   reset();
})

function reset(){
    p1display.textContent = 0;
    p2display.textContent = 0;
    gameOver = false;
    p1score = 0;
    p2score = 0;
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");

}
num.addEventListener("change" , function(){
    // inputvalue++;
    p.textContent = num.value;
    final = Number(num.value);
    reset();
})