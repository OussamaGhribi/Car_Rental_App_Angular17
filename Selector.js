
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct number !';

document.querySelector('.number').textContent = 13;
document.querySelector('.scrore').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

/*=======================================================================*/

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
    }
})