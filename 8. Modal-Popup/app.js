var openBtn = document.getElementById('open');
var closeBtn = document.getElementById('close');

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

var modal = document.querySelector('.modal');

function openModal(){
    modal.classList.add('display-true');
}

function closeModal(){
    modal.classList.remove('display-true');
}