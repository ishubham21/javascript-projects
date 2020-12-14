function fetchPrice(){
    //resolves the promise
    fetch('https://api.cryptonator.com/api/ticker/btc-usd')
    .then((res) => {
        //returning promise
        return res.json();    
    })
    //if 1st then is successful execute second
    .then((data) => {
        printData(data.ticker.price);
    })
    .catch((e) => {
        console.log('Error');
    })
}

function printData(price){
    var btcPrice = document.querySelector('#btcPrice');
    btcPrice.innerText = price;
}

fetchPrice();
