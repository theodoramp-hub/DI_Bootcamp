const myDiv = document.getElementById("boxes");

const resultMessage = document.createElement("p");
myDiv.before(resultMessage);

let board = ["", "", "", "", "", "", "", "", ""];

let playerSymbol;
let computerSymbol;
let gameOver = false;

const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];

document.getElementById("chooseX").addEventListener("click", () => {
    playerSymbol = "X";
    computerSymbol = "O";
});

document.getElementById("chooseO").addEventListener("click", () => {
    playerSymbol = "O";
    computerSymbol = "X";
});

for (let i = 0; i < 9; i++) {
    const box = document.createElement("div");
    box.id = "box" + i;
    box.classList.add("box");

    box.addEventListener("click", () => {
        if (gameOver || playerSymbol === undefined) {
            return;
        }

        if (board[i] !== "") {
            return;
        }

        // Prevent changing symbols after the first move.
        document.getElementById("chooseX").disabled = true;
        document.getElementById("chooseO").disabled = true;

        board[i] = playerSymbol;
        box.textContent = playerSymbol;
        console.log(board);

        // Stop here if the player won or the board is full.
        if (checkGameEnd(playerSymbol, "Player")) {
            return;
        }

        computerMove();
    });

    myDiv.appendChild(box);
}

function computerMove() {
    if (gameOver) {
        return;
    }

    const emptyIndexes = board.reduce((result, cell, index) => {
        if (cell === "") {
            result.push(index);
        }

        return result;
    }, []);

    if (emptyIndexes.length === 0) {
        return;
    }

    const randomPosition = Math.floor(Math.random() * emptyIndexes.length);
    const chosenIndex = emptyIndexes[randomPosition];

    board[chosenIndex] = computerSymbol;
    document.getElementById("box" + chosenIndex).textContent = computerSymbol;

    checkGameEnd(computerSymbol, "Computer");
}

function checkWinner(symbol) {
    return winCombos.some(combo =>
        combo.every(index => board[index] === symbol)
    );
}

function checkGameEnd(symbol, name) {
    if (checkWinner(symbol)) {
        resultMessage.textContent = name + " won!";
        gameOver = true;
        return true;
    }

    if (board.every(cell => cell !== "")) {
        resultMessage.textContent = "Tie game";
        gameOver = true;
        return true;
    }

    return false;
}