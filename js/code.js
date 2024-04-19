'use strict';

// Variables to store the secret number, user guess, and the initial score
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let guess;

// Select DOM elements
const guessInput = document.querySelector('.guess');
const secretNumberDisplay = document.querySelector('.number');
const checkBtn = document.querySelector('.check');
const message = document.querySelector('.message');
const scoreDisplay = document.querySelector('.score');
const highscoreDisplay = document.querySelector('.highscore');

// Update the secret number display
secretNumberDisplay = secretNumber;

// Add event listener to the check button
checkBtn.addEventListener('click', () => {
    // Get the user guess from the input field
    guess = Number(guessInput.value);

    // Check if the user has entered a guess
    if (!guess) {
        message.textContent = '⛔ No Number';
    } else if (guess === secretNumber) {
        message.textContent = '🏆 correct Number';
        document.querySelector('body').style.backgroundColor = 'green';
        secretNumberDisplay.style.width = '10rem';
        secretNumberDisplay.textContent = secretNumber;
        // Update the highscore if necessary
        if (highscoreDisplay.textContent < score) {
            highscoreDisplay.textContent = score;
        }
    } else if (guess < secretNumber) {
        if (score > 1) {
            message.textContent = '📉 too low';
            score--;
            scoreDisplay.textContent = score;
        } else {
            message.textContent = '🎶  you lost the game !';
            scoreDisplay.textContent = 0;
        }
    } else if (guess > secretNumber) {
        if (score > 1) {
            message.textContent = '📈 too high';
            score--;
            scoreDisplay.textContent = score;
        } else {
            message.textContent = '🎶  you lost the game !';
            scoreDisplay.textContent = 0;
        }
    }
});

// Add event listener to the again button
document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    secretNumberDisplay.textContent = secretNumber;
    message.textContent = '🍀 Start guessing...';
    document.querySelector('body').style.backgroundColor = 'black';
    guessInput.value = '';
    secretNumberDisplay.style.width = '5rem';
    scoreDisplay.textContent = score;
});