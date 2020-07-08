// alert("connected");
var button = document.querySelector("button");
// var pink = false;

// button.addEventListener("click",function(){
    
//     if(pink){
//     document.body.style.background = "white";
//     }else{
//     document.body.style.background = "pink";
//     }
//     pink = !pink;

// });
button.addEventListener("click",function(){
    document.body.classList.toggle("pink");
});