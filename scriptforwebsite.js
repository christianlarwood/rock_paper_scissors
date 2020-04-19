
//add event to each button
const rockbtn = document.getElementById('rock')
rockbtn.addEventListener('click', function() {
    playRound('ROCK',computerPlay());
});

const paperbtn = document.getElementById('paper')
paperbtn.addEventListener('click', function() {
    playRound('PAPER',computerPlay());
});

const scissorsbtn = document.getElementById('scissors')
scissorsbtn.addEventListener('click', function() {
    playRound('SCISSORS',computerPlay());
});

let playerTally = document.getElementById('playertally');
let compTally = document.getElementById('comptally');
let roundAnnouncement = document.getElementById('roundresult');

//r,p,s options
let moveOptions = [
    'ROCK',
    'PAPER',
    'SCISSORS'
]

//computer choice
function computerPlay() {
    return moveOptions[Math.floor(Math.random() * moveOptions.length)];
}

//-------initialized score-------
let playerScore = 0;
let computerScore = 0;

//-------single round of play-------
function playRound(playerSelection, computerSelection) {
    //if...else statement for logic & score
    if (playerSelection === 'ROCK' && computerSelection === 'PAPER'|| playerSelection === 'PAPER' && computerSelection === 'SCISSORS' || playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        computerScore += 1;
        roundAnnouncement.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        playerTally.textContent = playerScore;
        compTally.textContent = computerScore;
    } else if (playerSelection === computerSelection) {
        roundAnnouncement.textContent = `Tie! You both chose ${playerSelection}`;
        playerTally.textContent = playerScore;
        compTally.textContent = computerScore;
    } else {
        playerScore += 1;
        roundAnnouncement.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        playerTally.textContent = playerScore;
        compTally.textContent = computerScore;
    }
    //if...else if statement to end game when score is met
    if (playerScore === 3) {
        roundAnnouncement.textContent = 'You win! Final Score:';
        playerTally.textContent = playerScore;
        compTally.textContent = computerScore;
    } else if (computerScore === 3) {
        roundAnnouncement.textContent = 'You lose. Final Score:';
        playerTally.textContent = playerScore;
        compTally.textContent = computerScore;
    }
}


//-------multi round game-------
// function game(numOfRounds) {
//     // function that calculates how many wins needed
//     // function midOfRound(numOfRounds) {
//     //     if (numOfRounds % 2 === 0) {
//     //         return numOfRounds / 2 + 1;
//     //     } else {
//     //         return Math.ceil(numOfRounds / 2);
//     //     }
//     //     }
//     //loop to play x rounds
//     for (let i = 0; i < numOfRounds; i++) {
//         // let playerSelection = prompt(`What's your move? Rock, PAPER, SCISSORS`).toLowerCase();
//         let computerSelection = computerPlay();
//         // playRound(playerSelection, computerSelection);
//         console.log(`Round ${i+1}:`, playRound(playerSelection, computerSelection));
//         console.log('Player score: ', playerScore);
//         console.log('Computer score: ', computerScore);
//     if (playerScore === 5) {
//         console.log('Player score: ', playerScore);
//         console.log('Computer score: ', computerScore);
//         console.log('You win!')
//     } else if (computerScore === 5) {
//         console.log('Player score: ', playerScore);
//         console.log('Computer score: ', computerScore);
//         console.log('You lose.');
//     }
//     }
// }

// //need to account for tie, tie, win/lose scenario
// //or win, lose, win, lose, tie scenario
// //game should only be played until someone wins +1 middle

// game();
