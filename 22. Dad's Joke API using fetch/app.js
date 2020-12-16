function fetchJoke(){
    //this is how you set headers with fetch method
    fetch('https://icanhazdadjoke.com/', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
    })
    .then((res) => {
        return res.json()
    })
    .then((jokeObj) => {
        printJoke(jokeObj.joke)
    })
    .catch(() => {
        console.log('There is some error from server side');
    })
}

function printJoke(joke) {
    var jokeSpace = document.querySelector('p')
    jokeSpace.innerText = joke;
}

var newJoke = document.querySelector('button')
newJoke.addEventListener('click', fetchJoke)

fetchJoke()


