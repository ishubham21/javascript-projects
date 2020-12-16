//fairly small piece of code
const btcPrice = async () => {
    try {
        const price = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
        const data = await price.json()
        printPrice(data.ticker.price)
    } catch (error) {
        console.log('Something is not right', e);
    }
}

function printPrice(price) {
    var priceSp = document.querySelector('#btcPrice')
    priceSp.innerText = price
}

btcPrice()