document.addEventListener("DOMContentLoaded", (event) => {
    dicegame();

});
const button= document.getElementsByTagName("button");
document.addEventListener("click",(event)=>{
    dicegame();
});
function dicegame(){
    const player1 = document.querySelector(".img1");
    const player2 = document.querySelector(".img2");
    const winner = document.getElementById("winner");

    // Correct random number generation for a dice roll (1-6)
    const dice1 = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
    const dice2 = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6

    // Correct image paths with forward slashes
    player1.src = `dice${dice1}.png`;
    player2.src = `dice${dice2}.png`;

    if(dice1>dice2){
        winner.textContent=`Player 1 is the Winner`;
    }
    else if(dice2>dice1){
        winner.textContent=`Player 2 is the Winner`;
    }
    else{
        winner.textContent=`It's a Tie!`;
    }
}