document.addEventListener("click",function(event){
    var audio=new Audio("sounds/"+event.target.innerHTML+".mp3");
    audio.play();
    setAnimation(event.target.innerHTML);
    
})
document.addEventListener("keydown",function(event){
    var audio=new Audio("sounds/"+event.key+".mp3");
    audio.play();
    setAnimation(event.key);
    
})
function setAnimation(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(
       function (){
        document.querySelector("."+key).classList.remove("pressed");
       }
    ,100);
}
