p1=(Math.ceil((Math.random())*5));
p2=(Math.ceil((Math.random())*5));
document.querySelector(".img1").setAttribute("src","./images/dice"+String(p1)+".png");
document.querySelector(".img2").setAttribute("src","./images/dice"+String(p2)+".png");
if (p1>p2){document.querySelector("h1").innerHTML=("Player 1 Won");}
else if (p1<p2){document.querySelector("h1").innerHTML=("Player 2 Won");}
else {document.querySelector("h1").innerHTML=("Game Tied");}