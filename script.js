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

console.log(getHumanChoice());