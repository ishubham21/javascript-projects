const form = document.querySelector('form');

form.addEventListener('submit', calculate);    
   
function calculate(e){
    e.preventDefault();
    const hgt = document.querySelector('#height').value;
    const wgt = document.querySelector('#weight').value;

    if(!(hgt && wgt)){
        alert('Enter valid values');
    }

    else{
        const hgtM = hgt / 100;
        const bmi = wgt / (Math.pow(hgtM, 2));

        popupDisplay();

        const printBMI = document.querySelector('#printBMI');
        printBMI.innerText = bmi;
    }

    form.reset();
}

function popupDisplay(){
    const displayPop = document.querySelector('.popup');
    displayPop.classList.add('display-tru');
    
    const close = document.querySelectorAll('button')[1];
    close.addEventListener('click', () => {
        displayPop.classList.remove('display-tru');
    });
}
