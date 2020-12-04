var text = document.querySelector('h1');
var add = document.getElementById('plus');
var sub = document.getElementById('minus');
var reset = document.getElementById('reset');
var popup = document.querySelector('.popup');
var count = 0;

add.addEventListener('click', addCount);
sub.addEventListener('click', subCount);
reset.addEventListener('click', resetCount);
function addCount (){
    count++;
    text.innerHTML = count;
}
function subCount(){
    count--;
    if(count >= 0){
        text.innerHTML = count;
    }
    else{
        alert("Can't move below 0");
        count = 0;
    }
}
function resetCount(){
    var y = document.getElementById("yes");
    var n = document.getElementById("no");
    popup.classList.add('display-tru');
    y.addEventListener('click', () => {
        count = 0;
        text.innerHTML = count;
        popup.classList.remove('display-tru');
    });
    n.addEventListener('click', ()=> {
        popup.classList.remove('display-tru');
    });
}