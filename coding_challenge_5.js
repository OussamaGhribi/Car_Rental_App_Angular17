const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');

const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const scores = [0,0];
let currentScore = 0;
let activePlayer = 0;

score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add("hidden");

btnRoll.addEventListener('click' , function() {

    const dice = Math.trunc(Math.random()*6)+1;

    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`; //cause in html there is [ <img src="dice-0.png">] we change the number 0

    if (dice = 1){
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }else {
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        if (activePlayer === 0) {
            activePlayer = 1;
        }else {
            activePlayer = 0;
        }
        player0EL.classList.toggle("active-player");
        player1EL.classList.toggle("active-player");
    }
})

