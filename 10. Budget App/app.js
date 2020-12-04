const incInp = document.querySelector('#income');
const expInp = document.querySelector('#expense');

const incOut = document.querySelector('#incOut');
const expOut = document.querySelector('#expOut');
const balOut = document.querySelector('#balOut');
const finalBal = document.querySelector('#balBigOut');

const form = document.querySelector('form');

displayLive();

form.addEventListener('submit', checkVal);

function checkVal(e){
    e.preventDefault();
    if (!(incInp.value && expInp.value) || (incInp.value < 0) || (expInp.value < 0)) {
        alert("Enter valid values");
        form.reset();
    }
    else{
        calculate();
    }    
}

function displayLive(){
    incInp.addEventListener('input', () => {
        incOut.innerText = incInp.value;
    });
    expInp.addEventListener('input', () => {
        expOut.innerText = expInp.value;
    });
}

function calculate() {
    const balance = incInp.value - expInp.value;
    balOut.innerText = balBigOut.innerText = balance;
    form.reset();
}