const form = document.querySelector('form');
const notesDiv = document.querySelector('.notes');

//executed first
displayElem();

//executed third
function createElem(e) {
    e.preventDefault();
    let notesVal = document.querySelector('textarea').value;
    
    // let para = document.createElement('p');
    // para.innerText = notesVal;
    // notesDiv.appendChild(para);

    notesDiv.innerHTML += `<p>${notesVal}</p>`;
    form.reset();

    //sending values to brower's local storage
    setLocalStorage();
    displayElem();
}

//executed 1st after creating elements
function displayElem() {
    let notesElem = JSON.parse(window.localStorage.getItem('notes'));
    
    //set display true only if notesElem Exists
    if(notesElem){
        notesDiv.innerHTML = notesElem;
        notesDiv.style.display = 'block';
    }

    //to listen for click events
    deleteElem();
}

//executed after creating and deleting elements
function setLocalStorage(){
    window.localStorage.setItem('notes', JSON.stringify(notesDiv.innerHTML));
}

function deleteElem(){
    
    // let paras = document.querySelectorAll('p');
    // for (let i = 0; i < paras.length; i++) {
    //     paras[i].addEventListener('click', () => {
    //         paras[i].remove();
    //         setLocalStorage();
    //     });        
    // }

    notesDiv.addEventListener('click', (e) => {
        e.target.remove();
        setLocalStorage();
    });
}

//executed after submit
form.addEventListener('submit', createElem);