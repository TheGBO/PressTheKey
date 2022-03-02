var keyToPressDisplay = document.getElementById("key-to-press-display");
var scoreDisplay = document.getElementById("score-display");

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var speed = 1900;
var score = 0;

document.addEventListener('keypress', (e) => {
    if(e.key.toUpperCase() == keyToPressDisplay.innerHTML){
        keyToPressDisplay.style.color = "#0000FF";
        score++;
        scoreDisplay.innerText = `score: ${score}`;
        setTimeout(() => {
            keyToPressDisplay.style.color = "#000";
        }, 300);
        speed-=50;
    }else{
        keyToPressDisplay.style.color = "#FF0000";
        score--;
        if(score < 0){
            alert("Game Over");
            window.location.reload();
        }
        scoreDisplay.innerText = `score: ${score}`;
        setTimeout(() => {
            keyToPressDisplay.style.color = "#000";
        }, 300);
        speed++;
    }
});

function changeLetter(){
    keyToPressDisplay.innerHTML = letters.split('')[Math.floor(Math.random() * letters.length)];
}

setInterval(()=>{
    changeLetter();
},speed)