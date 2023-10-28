var photos = [
    "./images/dice1.png",
    "./images/dice2.png",
    "./images/dice3.png",
    "./images/dice4.png",
    "./images/dice5.png",
    "./images/dice6.png"
  ];
  var randomNum1=Math.floor(Math.random()*6);
  document.querySelector(".img1").setAttribute("src",photos[randomNum1]);

  var randomNum2=Math.floor(Math.random()*6);
  document.querySelector(".img2").setAttribute("src",photos[randomNum2]);

  if(randomNum1>randomNum2){
    document.querySelector("h1").innerHTML="Player 1 is win";
  }
  else if(randomNum1<randomNum2){
    document.querySelector("h1").innerHTML="Player 2 is win";
  }
  else{
    document.querySelector("h1").innerHTML="Draw!";
  }