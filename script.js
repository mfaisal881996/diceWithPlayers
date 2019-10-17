var scoreOfFirstPlayer = 0;
var scoreOfSecondPlayer = 0;

function playTheGame(){
    var firstPlayer = Math.floor(Math.random() * 6) + 1;
    var sourceImage = "images/dice"+firstPlayer+".png";
    document.getElementsByClassName("dice")[0].setAttribute("src",sourceImage);

    var secondPlayer = Math.floor(Math.random() * 6) + 1;
    var sourceImage = "images/dice"+secondPlayer+".png";
    document.getElementsByClassName("dice")[1].setAttribute("src",sourceImage);

    movePlayer(firstPlayer,secondPlayer);
    choosingWhoWins();
}

function movePlayer(firstPlayer,secondPlayer){

    scoreOfFirstPlayer += (firstPlayer * 10);
    document.getElementsByClassName("player")[0].style.top = scoreOfFirstPlayer+"px";

    scoreOfSecondPlayer += (secondPlayer * 10);
    document.getElementsByClassName("player")[1].style.top = scoreOfSecondPlayer+"px";
}
function choosingWhoWins(){
    var one = document.getElementsByClassName("player")[0].getBoundingClientRect();
    var two = document.getElementsByClassName("player")[1].getBoundingClientRect();
    var second = document.getElementsByClassName("finishLine")[0].getBoundingClientRect();
    if(one.top >= second.top){
        document.getElementsByClassName("flag")[1].style.visibility = "hidden";
        document.getElementsByClassName("flag")[0].style.visibility = "visible";
    }
    else if(two.top >= second.top){
        document.getElementsByClassName("flag")[0].style.visibility = "hidden";
        document.getElementsByClassName("flag")[1].style.visibility = "visible";
    }
}