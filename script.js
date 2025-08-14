let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    //Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
    let choice = Math.random();
    if (choice < 0.333) {
        return 'rock';
    } else if (choice > 0.333 && choice < 0.667) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    return prompt(`Rock, paper, or scissors?`).toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`Same choice, it's a draw!`);
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore++;
        console.log('Paper beats rock. Computer wins!');
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore++;
        console.log(`Scissors beats paper. Computer wins.`);
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++;
        console.log('Rock smashes scissors into tiny smitherines. Computer is victorious.');

    } else if (computerChoice === 'rock' && humanChoice === 'paper') {
        humanScore++;
        console.log('Paper suffocates rock. Meatbag wins!');
    } else if (computerChoice === 'paper' && humanChoice === 'scissors') {
        humanScore++;
        console.log(`Scissors slices paper. You win this time, human.`);
    } else if (computerChoice === 'scissors' && humanChoice === 'rock') {
        humanScore++;
        console.log('Rock smashes scissors into tiny smitherines. You are victorious.');
    }
}



playRound(getHumanChoice(), getComputerChoice());