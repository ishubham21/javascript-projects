function requestData(){

    var req = new XMLHttpRequest()
    
    req.onload = () => {
        var jokeRec = JSON.parse(req.responseText);
        var joke = jokeRec.joke;

        printJoke(joke);
    };
    
    req.onerror = () => {
        console.log('Error');
    }

    req.open('GET', 'https://icanhazdadjoke.com/');

    //requesting to send data in JSON Format rather than HTML
    req.setRequestHeader('Accept', 'application/json');
    req.send();
}
 function printJoke(joke) {
     var jokeSpace = document.querySelector('p');

     jokeSpace.innerText = joke;
 }

var btn = document.querySelector('button');
btn.addEventListener('click', requestData);

requestData();