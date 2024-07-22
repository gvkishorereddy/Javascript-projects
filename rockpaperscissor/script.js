const choices = ['rock', 'paper', 'scissor'];
const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const result = document.getElementById("result");

function playgame(player){

  const computer = choices[Math.floor(Math.random()*3)];
  playerChoice.textContent = `Player : ${player}`;
  computerChoice.textContent = `Computer : ${computer}`;

  if(player === computer){
    result.textContent = "IT'S A TIE!";
}
else if(player === "rock" && computer === "scissor"){
    result.textContent = "Player Won!";
}
else if(player === "rock" && computer === "paper"){
    result.textContent = "Computer Won!";
}
else if(player === "paper" && computer === "rock"){
    result.textContent = "Player Won!";
}
else if(player === "paper" && computer === "scissor"){
    result.textContent = "Computer Won!";
}
else if(player === "scissor" && computer === "paper"){
    result.textContent = "Player Won!";
}
else if(player === "scissor" && computer === "rock"){
    result.textContent = "Computer Won!";
}

if(result.textContent == "Player Won!"){
  result.style.color = "green";
}
else if(result.textContent == "Computer Won!"){
  result.style.color = "red";
}
else if(result.textContent == "IT'S A TIE!"){
  result.style.color = "black";
}


}

