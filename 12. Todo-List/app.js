const form = document.querySelector('form');
const itemUl = document.querySelector('ul');
form.addEventListener('submit', addItem);

displayItems();

function addItem(e){
    
    e.preventDefault();
    var itemVal = document.querySelector('input').value;
    if (itemVal) {
        itemUl.innerHTML += '<li>' + itemVal + '</li>';
        setLocalStorage();
    }
    else{
        alert('Enter valid tasks');
    }
    
    form.reset();
}

function setLocalStorage(){

    window.localStorage.setItem('todo-items', JSON.stringify(itemUl.innerHTML));
    displayItems();

}

function displayItems(){

    const todoItems = JSON.parse(window.localStorage.getItem('todo-items'));
    itemUl.innerHTML = todoItems;
    itemUl.classList.add('display-true');
    deleteItems();
}

function deleteItems(){
    const listItems = document.querySelectorAll('li');
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].addEventListener('click', () => {
            if (listItems[i].classList.contains('striked')) {
                listItems[i].remove();
                setLocalStorage();
            }
            else{
                listItems[i].classList.add('striked');
            }
        });        
    }
    // itemUl.addEventListener('click', (e) => {
    //     if (e.target.classList.contains('striked')) {
    //         e.target.remove();
    //         setLocalStorage();
    //     }
    //     else{
    //         e.target.classList.add('striked');
    //     }
    // });
   
}

const popup = document.querySelector('.popup');
const container = document.querySelector('.container');
window.addEventListener('load', () => {
    container.classList.add('make-opaque');
    
    //countdown timer
    //pulls time from span
    var seconds = document.getElementById("close-time").innerText;
    var countdown = setInterval(function () {
        seconds--;
        document.getElementById("close-time").innerText = seconds;
        if (seconds <= 0) clearInterval(countdown);
    }, 1000);

    setTimeout(closePopFun, 5000);
});

const closePop = document.querySelector('#closePop');
closePop.addEventListener('click', closePopFun);

function closePopFun(){
    popup.classList.add('display-0');
    container.classList.remove('make-opaque');
}

