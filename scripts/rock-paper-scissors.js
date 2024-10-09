let score = JSON.parse(localStorage.getItem('Score')) || {
  win: 0,
  lose: 0,
  ties: 0
};

updateScoreElement();

// if (!score) {
//   score = {
//     win : 0,
//     lose : 0,
//     ties : 0
//   }
// }

function playgame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';
  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose'
    } else if (computerMove === 'paper') {
      result = 'You win'
    } else if (computerMove === 'scissors') {
      result = 'Tie'
    }
  }
  else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win'
    } else if (computerMove === 'paper') {
      result = 'Tie'
    } else if (computerMove === 'scissors') {
      result = 'You lose'
    }
  }
  else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie'
    }
    else if (computerMove === 'paper') {
      result = 'You lose'
    }
    else if (computerMove === 'scissors') {
      result = 'You win'
    }
  }
  if (result === 'You win') {
    score.win += 1;
  } else if (result === 'You lose') {
    score.lose += 1;
  } else if (result === 'Tie') {
    score.ties += 1
  }

  localStorage.setItem('Score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You <img class="sign-img" src="./images/${playerMove}.png" > Computer <img class="sign-img" src="./images/${computerMove}.png" >`;

}

function updateScoreElement() {
  document.querySelector('.score-p').innerHTML = `wins : ${score.win}, Losses: ${score.lose}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = ''

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}
