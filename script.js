let counter = 0;
let userScore = 0;
let computerScore = 0;

const result = document.querySelector(".result");
const beginButton = document.querySelector(".begin");
beginButton.addEventListener("click", () => {
    beginButton.remove();
    game();
});

function game() {
    const resultContainer = document.querySelector(".result");
    const container = document.querySelector(".container");
    const rockButton = document.createElement("button");
    const paperButton = document.createElement("button");
    const scissorsButton = document.createElement("button");
    rockButton.textContent = "🪨";
    paperButton.textContent = "📃";
    scissorsButton.textContent = "✂️";
    rockButton.classList.add("rock");
    paperButton.classList.add("paper");
    scissorsButton.classList.add("scissors");
    rockButton.title = "Rock";
    paperButton.title = "Paper";
    scissorsButton.title = "Scissors";

    rockButton.addEventListener("click", () => {
        let userChoice = "Rock";
        let computerChoice = getComputerChoice();

        if (userChoice.match(computerChoice)) { 
            resultContainer.textContent = `It's a tie!\n${userScore} - ${computerScore}`;
        } else if (userChoice === "Rock" && computerChoice === "Paper") { 
            computerScore++; 
            resultContainer.textContent = `Computer beats user with: ${computerChoice} vs ${userChoice}\n${userScore} - ${computerScore}`;
        } else if (userChoice === "Rock" && computerChoice === "Scissors") {  
            userScore++; 
            resultContainer.textContent = `User beats Computer with: ${userChoice} vs ${computerChoice}\n${userScore} - ${computerScore}`;
        }

        counter++;
        if (counter >= 5) { // End loop if counter reaches 5
            calculateResult(userScore, computerScore);
        }
    });

    paperButton.addEventListener("click", () => {
        let userChoice = "Paper";
        let computerChoice = getComputerChoice();

        if (userChoice.match(computerChoice)) { 
            resultContainer.textContent = `It's a tie!\n${userScore} - ${computerScore}`;
        } else if (userChoice === "Paper" && computerChoice === "Rock") {  
            userScore++; 
            resultContainer.textContent = `User beats Computer with: ${userChoice} vs ${computerChoice}\r\n${userScore} - ${computerScore}`;
        } else if (userChoice === "Paper" && computerChoice === "Scissors") { 
            computerScore++; 
            resultContainer.textContent = `Computer beats user with: ${computerChoice} vs ${userChoice}\n${userScore} - ${computerScore}`;
        }

        counter++;
        if (counter >= 5) { // End loop if counter reaches 5
            calculateResult(userScore, computerScore);
        }
    });

    scissorsButton.addEventListener("click", () => {
        let userChoice = "Scissors";
        let computerChoice = getComputerChoice();

        if (userChoice.match(computerChoice)) { 
            resultContainer.textContent = `It's a tie!\n${userScore} - ${computerScore}`;
        } else if (userChoice === "Scissors" && computerChoice === "Rock") { 
            computerScore++;
            resultContainer.textContent = `Computer beats user with: ${userChoice} vs ${computerChoice}\n${userScore} - ${computerScore}`;
        } else if (userChoice === "Scissors" && computerChoice === "Paper") { 
            userScore++;
            resultContainer.textContent = `User beats Computer with: ${userChoice} vs ${computerChoice}\n${userScore} - ${computerScore}`;
        }

        counter++;
        if (counter >= 5) { // End loop if counter reaches 5
            calculateResult(userScore, computerScore);
        }
    })

    container.appendChild(rockButton);
    container.appendChild(paperButton);
    container.appendChild(scissorsButton);
}

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        return "Rock";
    } else if (computerChoice === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function calculateResult(userScoreLocal, computerScoreLocal) {
    const rockButton = document.querySelector(".rock");
    const paperButton = document.querySelector(".paper");
    const scissorsButton = document.querySelector(".scissors");
    rockButton.remove();
    paperButton.remove();
    scissorsButton.remove();

    if (userScoreLocal == computerScoreLocal) {
        document.querySelector(".result").textContent = `It's a tie!\nuser: ${userScoreLocal} - computer: ${computerScoreLocal}`;
    } else if (userScoreLocal < computerScoreLocal) {
        document.querySelector(".result").textContent = `Computer has won:\n${userScoreLocal} - ${computerScoreLocal}`;
    } else {
        document.querySelector(".result").textContent = `User has won:\n${userScoreLocal} - ${computerScoreLocal}`
    }

    const playAgainButton = document.createElement("button");
    playAgainButton.classList.add("play-again")
    playAgainButton.textContent = "Play again?";
    playAgainButton.addEventListener("click", resetGame);

    const container = document.querySelector(".container");
    container.appendChild(playAgainButton);
}

function resetGame() {
    counter = 0;    
    userScore = 0;
    computerScore = 0;
    document.querySelector(".result").textContent = "";
    document.querySelector("button").remove();
    game();
}
