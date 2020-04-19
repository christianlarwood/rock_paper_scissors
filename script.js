
//-----computer rock, paper, scissors choices-----
let moveOptions = [
    'rock',
    'paper',
    'scissors'
]

//-----simple function to randomly choose a move option-----
function computerPlay() {
    return moveOptions[Math.floor(Math.random() * moveOptions.length)];
}

//-----intitializing the score-----
let playerScore = 0;
let computerScore = 0;

//-----single round function-----
function playRound(playerSelection, computerSelection) {
    // let playerSelection = prompt(`What's your move? Rock, paper, scissors`).toLowerCase();
    // let computerSelection = computerPlay();
    if (playerSelection === 'rock' && computerSelection === 'paper'|| playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore += 1;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection === computerSelection) {
        return `Tie! You chose: ${playerSelection} and the computer chose: ${computerSelection}`;
    } else {
        playerScore += 1;
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
}

//------function to play multiple rounds------
function game(numOfRounds) {
    // function to determine the # of wins needed when rounds can be any number. If you enable this you must update the hardcoded '3's at the bottom of this function
    // function midOfRound(numOfRounds) {
    //     if (numOfRounds % 2 === 0) {
    //         return numOfRounds / 2 + 1;
    //     } else {
    //         return Math.ceil(numOfRounds / 2);
    //     }
    //     }
    //loop to play x rounds
    for (let i = 0; i < numOfRounds; i++) {
        let playerSelection = prompt(`What's your move? Rock, paper, scissors`).toLowerCase();
        let computerSelection = computerPlay();
        console.log(`Round ${i+1}:`, playRound(playerSelection, computerSelection));
        console.log(playerScore);
        console.log(computerScore);
    // if...else if statement to display final score
    if (playerScore === 3) {
        console.log('Player score: ', playerScore);
        console.log('Computer score: ', computerScore);
        console.log('You win!')
    } else if (computerScore === 3) {
        console.log('Player score: ', playerScore);
        console.log('Computer score: ', computerScore);
        console.log('You lose.');
    }
    }
}

game(5);

//-----updates needed when midOfRound function is active------
//need to account for tie, tie, win/lose scenario
//or win, lose, win, lose, tie scenario
//game should only be played until someone wins +1 middle
