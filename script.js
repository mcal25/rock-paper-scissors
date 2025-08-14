

function getComputerChoice() {
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
    return prompt(`Best of 5. rock, paper, or scissors?`).toLowerCase();
}



function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log(`Same choice, it's a draw!`);
        } else if (humanChoice === 'rock' && computerChoice === 'paper') {
            computerScore++;
            console.log('Rock loses to my paper. I win!');
        } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            computerScore++;
            console.log(`My scissors deconstruct your paper. I win.`);
        } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
            computerScore++;
            console.log('My rock smashes your scissors into tiny smitherines. I am victorious.');
        } else if (computerChoice === 'rock' && humanChoice === 'paper') {
            humanScore++;
            console.log(`Your paper beats my rock.`);
        } else if (computerChoice === 'paper' && humanChoice === 'scissors') {
            humanScore++;
            console.log('Your scissors tear up my paper. You win this round, meatbag!');
        } else if (computerChoice === 'scissors' && humanChoice === 'rock') {
            humanScore++;
            console.log(`Your rock crushes my scissors. I'm suing. You win this time, human.`);
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    console.log(`The final score is Human:${humanScore} || Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log(`You win this time, human. You're not quite obsolete yet.`)
    } else if (computerScore > humanScore) {
        console.log(`Better luck next time, meatbag. You shall never exceed my processing capabilities. Beep boop.`);
    } else {
        console.log(`Not bad, human. I demand a rematch to determine who is superior.`);
    }
}

playGame();