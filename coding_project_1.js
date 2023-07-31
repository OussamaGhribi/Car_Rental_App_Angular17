document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess , typeof guess);
    const secretNumber = Math.trunc(Math.random()*20) + 1;

    if (!guess) {
        document.querySelector('.message').textContent = 'No Number';
    }else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number';
    }else if (guess > secretNumber) {
        document.querySelector('.message').textContent = 'Number too high';
        score--;
    }else if (guess < secretNumber) {
        document.querySelector('.message').textContent = 'Number too low';
        score--;
    }else {
        document.querySelector('.message').textContent = 'You lost the game';
        document.querySelector('.score').textContent = 0;
    }
})