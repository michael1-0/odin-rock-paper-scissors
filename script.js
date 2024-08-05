// Write game() function that act as initializer for the game
game();

function game() {
    let counter = 0;
    let userScore = 0;
    let computerScore = 0;

    // Begin while loop inside game()
    while(true) {
        // Init userPick variable with getUserChoice() function, return string
        let userChoice = getUserChoice();
        // Init computerPick variable with getComputerChoice() function, return string
        let computerChoice = getComputerChoice();

        // Compare userChoice to computerChoice
        if (userChoice.match(computerChoice)) { // If userChoice === computerChoice, output a tie
            alert(`It's a tie!\n${userScore} - ${computerScore}`);
        } else if (userChoice === "Rock" && computerChoice === "Paper") { // Else if userChoice < computerChoice, output computer has won
            computerScore++; // Store result to userScore or computerScore
            alert(`Computer beats user with: ${computerChoice} vs ${userChoice}\n${userScore} - ${computerScore}`)
        } else if (userChoice === "Rock" && computerChoice === "Scissors") { // Else userChoice > computerChoice, output user has won 
            userScore++; 
            alert(`User beats Computer with: ${userChoice} vs ${computerChoice}\n${userScore} - ${computerScore}`)
        } else if (userChoice === "Paper" && computerChoice === "Rock") { // Else userChoice > computerChoice, output user has won 
            userScore++; 
            alert(`User beats Computer with: ${userChoice} vs ${computerChoice}\n${userScore} - ${computerScore}`)
        } else if (userChoice === "Paper" && computerChoice === "Scissors") { // Else if userChoice < computerChoice, output computer has won
            computerScore++; 
            alert(`Computer beats user with: ${computerChoice} vs ${userChoice}\n${userScore} - ${computerScore}`)
        } else if (userChoice === "Scissors" && computerChoice === "Rock") { // Else if userChoice < computerChoice, output computer has won
            computerScore++;
            alert(`Computer beats user with: ${userChoice} vs ${computerChoice}\n${userScore} - ${computerScore}`)
        } else if (userChoice === "Scissors" && computerChoice === "Paper") { // Else userChoice > computerChoice, output user has won 
            userScore++;
            alert(`User beats Computer with: ${userChoice} vs ${computerChoice}\n${userScore} - ${computerScore}`)
        }

        counter++;
        if (counter >= 5) { // End loop if counter reaches 5
            break;
        }
    }

    if (userScore == computerScore) {
        alert(`It's a tie! \nuser: ${userScore} - computer: ${computerScore}`);
    } else if (userScore < computerScore) {
        alert(`Computer has won: ${userScore} - ${computerScore}`);
    } else {
        alert(`User has won: ${userScore} - ${computerScore}`)
    }
}

// Write getUserChoice() that returns desired user choice
function getUserChoice() {
    while (true) {
        let input = Number(prompt("Type 1 for Rock, 2 for Paper, and 3 for Scissors"));
        if (input === 1) {
            return "Rock";
        } else if (input === 2) {
            return "Paper";
        } else if (input === 3){
            return "Scissors";
        } else {
            continue;
        }
    }
}

// Write getComputerChoice(), generate random number for rock, paper, scissors
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








