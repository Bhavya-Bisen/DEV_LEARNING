function playsound(key){
    console.log(key);
    (new Audio("./sounds/"+String(key.key)+".mp3")).play();
}
document.addEventListener("keydown",function(event){playsound(event,KeyboardEvent.key)});
document.querySelector(".w").addEventListener("click",function(){(new Audio("./sounds/w.mp3")).play()});
document.querySelector(".a").addEventListener("click",function(){(new Audio("./sounds/a.mp3")).play();});
document.querySelector(".s").addEventListener("click",function(){(new Audio("./sounds/s.mp3")).play();});
document.querySelector(".d").addEventListener("click",function(){(new Audio("./sounds/d-1.mp3")).play();});
document.querySelector(".j").addEventListener("click",function(){(new Audio("./sounds/j.mp3")).play();});
document.querySelector(".k").addEventListener("click",function(){(new Audio("./sounds/k.mp3")).play();});
document.querySelector(".l").addEventListener("click",function(){(new Audio("./sounds/l.mp3")).play();});