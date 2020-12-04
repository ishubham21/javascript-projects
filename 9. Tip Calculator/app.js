var form = document.querySelector('form');
var tCost = document.getElementById('cost');
var service = document.querySelector('select');
var errBox = document.querySelector('.err-box');
var errText = document.querySelector('.err-box h2');

form.addEventListener('submit', checkFields);

function checkFields(e){
    e.preventDefault();
    if (tCost.value < 0 || tCost.value == "" || service.value == "nil") {
        errBox.classList.add('display-err');
        errText.innerHTML = "Please check your values";
    }
    else{
        errBox.classList.remove('display-err');
        calculate();
    }
    resetForm();
}

function resetForm(){
    form.reset();
}

function calculate(){
    var tip;
    switch (service.value) {
        case 'nice':
            tip = 20;
            break;
        case 'satisfied':
            tip = 15;
            break;
        case 'poor':
            tip = 10;
            break;
        default:
            break;
    }   
    
    var finalTip = tCost.value * tip/100;
    alert(`You should tip ${finalTip}/-`);
}