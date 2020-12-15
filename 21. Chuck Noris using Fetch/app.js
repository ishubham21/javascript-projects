function fetchJoke(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        printJoke(data.value)
    })
    .catch(() => {
        console.log('Error from server side')
    })
}

function printJoke(joke) {
    var jokeSpace = document.querySelector('p')
    jokeSpace.innerText = joke
}

var newJoke = document.querySelector('button')
newJoke.addEventListener('click', fetchJoke)

fetchJoke()