var ablDiv = document.querySelector('.abl');
function fetchValues(pokemon){
    var req = new XMLHttpRequest();
    req.onload = () => {
        var response = JSON.parse(req.responseText);
        handleResponse(response);
    }
    req.onerror = () => {
        console.log('Error');
        
    }
    req.open('GET', `https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    req.send();
}

function handleResponse(response) {
    //getting abilities
    var abilities = response.abilities;
    var nameArea = document.querySelector('#name');

    for (let i = 0; i < abilities.length; i++) {
        ablDiv.innerHTML += `<p>${abilities[i].ability.name}</p>`;       
    }
    nameArea.innerText = response.name;  
}

var pokeFrom = document.querySelector('form');
pokeFrom.addEventListener('submit', (e) => {

    e.preventDefault();
    var pokeName = document.querySelector('input').value;

    //setting content to be null
    ablDiv.innerText = "";
    fetchValues(pokeName);

});