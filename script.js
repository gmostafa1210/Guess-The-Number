'use strict';

// 70. Selecting and Maintaining Element
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number! ';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = secretNumber;
let score = 5;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess, typeof guess);

  // No Number
  if (!guess) {
    //document.querySelector('.message').textContent = 'No Number!';
    displayMessage('No Number!');

    // When Players Win
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct number!');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';

    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent = guess > secretNumber ? 'Too High !' : 'Too Low !';
      displayMessage(guess > secretNumber ? 'Too High !' : 'Too Low !');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = 'You lost the game!';
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#9c3d3d';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.number').style.width = '30rem';
    }

    //Number Is Too High
  } /*else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too high!';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Yuo Lost the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#9c3d3d';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.number').style.width = '30rem';
    }

    // Number Is Too Low
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too Low!';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Yuo Lost the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#9c3d3d';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.number').style.width = '30rem';
    }
  }*/
});
document.querySelector('.again').addEventListener('click', function () {
  score = 5;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
