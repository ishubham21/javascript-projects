//this projects adds images whose adresses are submitted through form
var form = document.querySelector('form');
form.addEventListener('submit', submitImage);

//this facilitates dynamic image addition
function submitImage(e){
    e.preventDefault();

    var imgAdd = document.getElementById('imgAdd').value;
    var newImg = document.createElement("img");
    
    newImg.src = imgAdd;
    
    var container = document.querySelector(".container");

    container.appendChild(newImg);

    form.reset();
}