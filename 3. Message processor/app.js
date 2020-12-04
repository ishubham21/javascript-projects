var form = document.querySelector('form');
form.addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();
    var msg = document.getElementById('msg').value;
    console.log(msg);
    alert("Your msg is:" + " " + msg);
}