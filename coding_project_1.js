document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess , typeof guess);
    const secretNumber = Math.trunc(Math.random()*20) + 1;

    if (!guess) {
        document.querySelector('.message').textContent = 'No Number';
        document.querySelector('.score').textContent += score;
        score--;
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
        score = 0;
    }
})

/*============================================================================== */

document.querySelector('.again').addEventListener('click', function (){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20 ) + 1 ; 

    document.querySelector('.score').textContent = score;
    document.querySelector('.messsage').textContent = "start guessing";
    document.querySelector('.number').textContent = '?' 
    
})