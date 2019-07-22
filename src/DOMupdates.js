import $ from 'jquery';

const DOMupdates = {
	
  startGame(game) {
    game.startGame();
    $('.main-input__player-one').hide();
    $('.main-input__player-two').hide();
    $('.main-button__submit-name').hide();

  },
  
  displayCurrentTurn(currentPlayerName, question) {
    $('.main-span__current-player').removeClass('welcomeCenter');
    $('.main-span__current-player').text(`${currentPlayerName.toUpperCase()}: `);
    $('.main-span__current-question').text(question);
  }, 

  turnCheckGuess(game) {
    let guess = $('.main-input__guess-input').val();
    game.currentRound.currentTurn.checkGuess(guess.toLowerCase());
  },  

  updateScore(name, score) {
    let playerOneName = $('.main-span__player-one-name').text();
    let playerOneScore = $('.main-h2__player-one-score');
    let playerTwoScore = $('.main-h2__player-two-score');
    name === playerOneName ? playerOneScore.text(score) : playerTwoScore.text(score);
  }, 

  surveySays(location, guess, points) {
    $(`.main-tr__${location}-answer`).text(guess.toUpperCase()).css({'padding-left': '10px', 'background-color': 'black', 'width': '81.5%'})
    $(`.main-tr__${location}-respondents`).text(points).css({'padding-left': '10px', 'background-color': 'black', 'border-left': '4px solid #fc5454'})
  },  

  clearBoard() {
    setTimeout(() => {
      $('.td-answers').text('').css({'padding-left': '', 'background-color': '', 'width': ''});
      $('.td-respondents').text('').css({'padding-left': '', 'background-color': '', 'border-left': ''});
    }, 2000);
  },

  turnHeadsForPlayers(name) {
    let playerOneName = $('.main-span__player-one-name').text();
    if (playerOneName === name) {
      $('.player.one.face').css('display', 'block');
      $('.player.one.turned').css('display', 'none');
      $('.player.two.face').css('display', 'none');
      $('.player.two.turned').css('display', 'block');
    } else {
      $('.player.one.face').css('display', 'none');
      $('.player.one.turned').css('display', 'block');
      $('.player.two.face').css('display', 'block');
      $('.player.two.turned').css('display', 'none');
    }
  },  

  wrongAnswerBuzzer() {
    new Audio('http://23.237.126.42/ost/family-feud-1993-snes/ibmozskhab/11%20Strike.mp3').play();
  },

  correctAnswerDing() {
    new Audio('http://23.237.126.42/ost/family-feud-1993-snes/pvjwehxopd/09%20Clang.mp3').play();
  },

  showRedX() {
    $('.redx').show();
    setTimeout(() => {
      $('.redx').hide();
    }, 1000);
  }, 

  updateTimer(seconds) {
    $('.main-h4__timer').text(seconds);
    $('.main-button__submit-guess').hide();
  },

  updateFastRoundButtons() {
    $('.main-button__start-game').hide();
    $('.main-button__start-fast-turn').show();
  },

  showMultiplierInput() {
    $('.main-button__submit-guess').hide();
    $('.main-input__guess-input').hide();
    $('.main-input__multiplier-input').show();
    $('.main-button__submit-multiplier').show();
  },

  hideFastGuessInput() {
    $('.main-button__submit-fast-guess').hide();
    $('.main-input__fast-guess-input').hide();
  },

  displayWinner(player) {
    new Audio('http://23.237.126.42/ost/family-feud-1993-snes/cxipbygzai/05%20Press%20Start%20Title%20Theme.mp3').play()
    $('.winner-name').text(player.name);
    $('.winner-points').text(player.score);
    $('.board').hide();
    $('.winner').show();
  },

  resetGame() {
    window.location.reload(true);
  },

  displayFastRoundMsg() {
    $('.board').hide();
    $('.fastMoney').show();
  },

  displayFastMoney() {
    $('.board').show();
    $('.redx').hide();
    $('.fastMoney').hide();
  }
}

export default DOMupdates;