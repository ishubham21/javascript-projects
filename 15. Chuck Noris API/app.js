function fetchJoke(){
    
    const req = new XMLHttpRequest();
    
    req.open('GET', 'https://api.chucknorris.io/jokes/random');
    
    req.onload = () => {
        var jokeObj = JSON.parse(req.responseText)
        var joke = jokeObj.value;
        var icon = jokeObj.icon_url;

        printData(joke, icon);
    }

    req.onerror = () => {
        console.log('Error');
    }

    req.send();
}

function printData(joke, icon){

    var jokeArea = document.querySelector('#joke-area');
    jokeArea.innerText = joke;

    var jokeImg =document.querySelector('#joke-icon');
    jokeImg.src = icon;

}

var refreshBtn = document.querySelector('button');
refreshBtn.addEventListener('click', fetchJoke);

fetchJoke();