// keep track of the scores
let playerScore = 0;
let computerScore = 0;

// grab the html elements we need to update
const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const resultText = document.getElementById('result-text');
const choicesText = document.getElementById('choices-text');
const buttons = document.querySelectorAll('.choice-btn');

const choices = ['rock', 'paper', 'scissors'];

// attach click events to all the buttons at once
buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.id);
    });
});

// pick a random move for the computer
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// main game logic
function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    let result = '';

    // figure out who won
    if (playerChoice === computerChoice) {
        result = "It's a Tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You Win!';
        playerScore++;
    } else {
        result = 'Computer Wins!';
        computerScore++;
    }

    updateUI(playerChoice, computerChoice, result);
}

// update the screen with the new stats
function updateUI(playerChoice, computerChoice, result) {
    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
   
    resultText.textContent = result;
   
    // capitalize the first letter of the choices so it looks better
    const pChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    const cChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
   
    choicesText.textContent = `You chose ${pChoice} | Computer chose ${cChoice}`;
} 
