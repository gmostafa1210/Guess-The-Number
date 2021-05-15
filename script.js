'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 5;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // No number
  if (!guess) {
    displayMessage('enter a valid number');
  }

  //Input out of range
  else if (guess > 20 || guess < 0){
    displayMessage('enter a valid number');
  }

  // When players win
  else if (guess === secretNumber) {
    displayMessage('correct!');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';

    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } 

  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'try lower' : 'try higher');
      score--;
      document.querySelector('.score').textContent = score;
    } 
    else {
      displayMessage('failed to guess!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#9c3d3d';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.number').style.width = '30rem';
    }
  } 
});


document.querySelector('.again').addEventListener('click', function () {
  score = 5;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'start guessing';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});