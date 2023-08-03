const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close_modal');
const btnsOpenModal = document.querySelector('.show_modal');
console.log(btnsOpenModal);

for (let i = 0; i<btnsOpenModal.length ; i++){
    btnsOpenModal[i].addEventListener('click',function(){
        modal.classList.remove('hidden');
    });
    btnCloseModal.addEventListener('click',function(){
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    });
};