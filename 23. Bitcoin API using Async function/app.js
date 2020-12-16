//fairly small piece of code
const btcPrice = async () => {
    const price = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
    const data = await price.json()
    printPrice(data.ticker.price)
}

function printPrice(price) {
    var priceSp = document.querySelector('#btcPrice')
    priceSp.innerText = price
}

btcPrice()