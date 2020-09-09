var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

if(randomNumber1 === 1){
  document.querySelector(".img1").setAttribute("src", "https://i.imgur.com/HsDFsvG.png");
}else if (randomNumber1 === 2){
  document.querySelector(".img1").setAttribute("src", "https://i.imgur.com/CFsSlNY.png");
}else if (randomNumber1 === 3){
  document.querySelector(".img1").setAttribute("src", "https://i.imgur.com/r06h80L.png");
}else if (randomNumber1 === 4){
  document.querySelector(".img1").setAttribute("src", "https://i.imgur.com/gfqOuDZ.png");
}else if (randomNumber1 === 5){
  document.querySelector(".img1").setAttribute("src", "https://i.imgur.com/aWIHmDt.png");
}else if (randomNumber1 === 6){
  document.querySelector(".img1").setAttribute("src", "https://i.imgur.com/3UubAdS.png");
}else{
  document.querySelector(".img1").setAttribute("src", "https://i.imgur.com/3UubAdS.png");
}
if(randomNumber2 === 1){
  document.querySelector(".img2").setAttribute("src", "https://i.imgur.com/HsDFsvG.png");
}else if (randomNumber2 === 2){
  document.querySelector(".img2").setAttribute("src", "https://i.imgur.com/CFsSlNY.png");
}else if (randomNumber2 === 3){
  document.querySelector(".img2").setAttribute("src", "https://i.imgur.com/r06h80L.png");
}else if (randomNumber2 === 4){
  document.querySelector(".img2").setAttribute("src", "https://i.imgur.com/gfqOuDZ.png");
}else if (randomNumber2 === 5){
  document.querySelector(".img2").setAttribute("src", "https://i.imgur.com/aWIHmDt.png");
}else if (randomNumber2 === 6){
  document.querySelector(".img2").setAttribute("src", "https://i.imgur.com/3UubAdS.png");
}else{
  document.querySelector(".img1").setAttribute("src", "https://i.imgur.com/3UubAdS.png");
}

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerText = "🚩 Player 1 wins!!";
} else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerText = "It's a draw!!";
} else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerText = "Player 2 wins!!🚩";
}else{
    document.querySelector("h1").innerText = "Refresh 2 Play!!";
}
