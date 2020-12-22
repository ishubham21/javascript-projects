if (window.navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition(getCoordinates)
}
else{
    alert('Geolocation not supported by browser')
}

function getCoordinates(position){
    console.log(position);
    getCity(position.coords.latitude, position.coords.longitude)
}

function getCity(lati, long) {
    //using OPENCAGEDATA API to get your current position
    //replace YOURKEY by obtaining a key from opencaedata's website
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lati}+${long}&key=YOURKEY`)
    .then(res => res.json())
    .then((location) => {
        printLoc(location.results[0].formatted)
    })
}

function printLoc(yourLocation) {
    var h2 = document.querySelector('h2')
    h2.innerHTML = yourLocation
}