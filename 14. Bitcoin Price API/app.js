openRequest();

//function to create an XHR request 
function openRequest(){
    const req = new XMLHttpRequest();

    req.onload = function () {
        var btcPrice = JSON.parse(req.responseText).ticker.price;
        printData(btcPrice);
    }

    req.onerror = () => {
        console.log('Error');
    }

    req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd', true);
    req.send(null);
}

function printData(price) {
    var priceCol = document.querySelector('#btc-price');
    priceCol.innerText = Math.round(price);;
}