//using HTML's geolocation API (it's inbuilt in browsers)
alert('Use console to explore more')
if(window.navigator.geolocation){
    window.navigator.geolocation.getCurrentPosition(getPositionCoords)
}
else{
    alert('Geolocation is not supported by the browser')
}

function getPositionCoords(position){
    var lati = document.querySelector('#lati')
    var long = document.querySelector('#long')

    //getting the values of coordinates
    lati.innerText = `Your Latitude: ${position.coords.latitude}`
    long.innerText = `Your Longitude: ${position.coords.longitude}`
}
