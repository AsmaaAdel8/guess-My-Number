'use strict';
// Variables to store the secret number, user guess, and the initial score
(()=>{

var secretNumber = Math.trunc(Math.random() * 20) + 1;
var score = 20;
var guess;

// Select DOM elements
var guessInput = document.querySelector('.guess');
var checkBtn = document.querySelector('.check');
var message = document.querySelector('.message');
var scoreDisplay = document.querySelector('.score');
var highscoreDisplay = document.querySelector('.highscore');
var againBtn = document.querySelector('.again');
var body = document.querySelector('body');
var secret = document.getElementById('number');

// Update the secret number display
secret.textContent="?";
highscoreDisplay.textContent=0;
var highscore=parseInt(highscoreDisplay.textContent);

// Add event listener to the check button
checkBtn.addEventListener('click', () => {
   // Get the user guess from the input field
     guess = Number(guessInput.value);
    // Check if the user has entered a guess
    if (!guess) {
        message.textContent = '⛔ No Number';
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
    } else if (guess == secretNumber) {
        message.textContent = '🏆 correct Number';
        body.style.backgroundColor = 'green';
        secret.innerHTML = guess;
        
        // Update the highscore if necessary
        if (highscore < score) {
            highscoreDisplay.textContent = score;
        }
        secret.style.width='15rem';
    }
});

// Add event listener to the again button
againBtn.addEventListener('click', () => {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    secret.textContent = '?';
    message.textContent = '🍀 Start guessing....';
    body.style.backgroundColor = 'rgb(64, 42, 42)';
    guessInput.value= '';
    scoreDisplay.textContent = score;
    secret.style.width="10rem";
});
})()