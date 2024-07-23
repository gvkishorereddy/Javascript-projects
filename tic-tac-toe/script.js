const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("statusText");
const restart = document.getElementById("restartBtn");
let options = ["", "", "", "", "", "", "", "", ""];
const winningOptions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let currentPlayer = "X";
let running = false;

startGame();

function startGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restart.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
}

function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");
    if(options[cellIndex] != "" || !running){
        return;
    }
    updateCell(this, cellIndex);
    checkWinner();
}

function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}

function changePlayer(){
    currentPlayer = (currentPlayer === "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn`;
}

function checkWinner(){
    let roundWon = false;
    for(let i = 0; i < winningOptions.length; i++){
        const [a, b, c] = winningOptions[i];
        const cellA = options[a];
        const cellB = options[b];
        const cellC = options[c];

        if(cellA === "" || cellB === "" || cellC === ""){
            continue;
        }
        if(cellA === cellB && cellB === cellC){
            roundWon = true;
            break;
        }
    }

    if(roundWon){
        statusText.textContent = `${currentPlayer} WIN!`;
        running = false;
    }
    else if(!options.includes("")){
        statusText.textContent = `Draw!`;
        running = false;
    }
    else{
        changePlayer();
    }
}

function restartGame(){
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    cells.forEach(cell => cell.textContent = "");
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
}
