// // Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyCvIu3BgQdTJzk4XsUTaC_3btiMOd5L6zs",
//     authDomain: "midnight-blog.firebaseapp.com",
//     databaseURL: "https://midnight-blog.firebaseio.com",
//     projectId: "midnight-blog",
//     storageBucket: "midnight-blog.appspot.com",
//     messagingSenderId: "1007800323341",
//     appId: "1:1007800323341:web:8c3b1594fab111067db444"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// var blogRef = firebase.database().ref("Blogs/");

// blogRef.on("child_added", function (data, prevChildKey) {
//     var newBlog = data.val();
//     console.log("email: " + newBlog.email);
//     var para = document.createElement('p');
//     para.classList.add('card');
//     para.innerHTML = newBlog.para;
//     var div = document.querySelector('#co');
//     div.prepend(para);
// })

const form = document.querySelector('form');

form.addEventListener('submit', calculate);    
   
function calculate(e){
    e.preventDefault();
    const hgt = document.querySelector('#height').value;
    const wgt = document.querySelector('#weight').value;

    if(!(hgt && wgt)){
        alert('Enter valid values');
    }

    else{
        const hgtM = hgt / 100;
        const bmi = wgt / (Math.pow(hgtM, 2));

        popupDisplay();

        const printBMI = document.querySelector('#printBMI');
        printBMI.innerText = bmi;
    }

    form.reset();
}

function popupDisplay(){
    const displayPop = document.querySelector('.popup');
    displayPop.classList.add('display-tru');
    
    const close = document.querySelectorAll('button')[1];
    close.addEventListener('click', () => {
        displayPop.classList.remove('display-tru');
    });
}
