var random1 = Math.floor(Math.random()*6)+1; //1-6

var random2 = Math.floor(Math.random()*6)+1; //1-6

var randomDiceImg1 = "dice" + random1 + ".png";

var randomDiceImg2 = "dice" + random2 + ".png";

var randomImgSrc1 = "Assets/Images/"+ randomDiceImg1;

var randomImgSrc2 = "Assets/Images/"+ randomDiceImg2;

var image1 = document.querySelectorAll("img")[0];

var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImgSrc1);

image2.setAttribute("src", randomImgSrc2);

if(random1 > random2){
    document.querySelector("h2").innerHTML = "Player 1 Wins";
} else if(random2 > random1){
    document.querySelector("h2").innerHTML = "Player 2 Wins";
}else {
    document.querySelector("h2").innerHTML = "It's a tie!";
}

function refreshPage(){
    window.location.reload();
} 