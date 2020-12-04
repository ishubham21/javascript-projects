var prev = document.getElementById('prev');
var next = document.getElementById('next');
var imgs = [
    "1.jpg", 
    "2.jpg", 
    "3.jpg", 
    "4.jpg"
];
var imgPos = 0; //to be kept same as array's index
var img = document.querySelector('img');
prev.addEventListener('click', prevImg);
next.addEventListener('click', nextImg);

function prevImg(){
    if(imgPos == 0){
        img.setAttribute("src", imgs[imgs.length - 1]);
        imgPos = imgs.length - 1 ;
    }
    else if (imgPos > 0 && imgPos < imgs.length){
        imgPos--;
        //console.log(imgPos);
        img.setAttribute("src", imgs[imgPos]);
    }
}

function nextImg(){
    if (imgPos == imgs.length - 1) {
        img.setAttribute("src", imgs[0]);
        imgPos = 0;
        //console.clear();
    }
    else if (imgPos >= 0 && imgPos < imgs.length - 1){  //writing this just to explain the iteration
        imgPos++;
        //console.log(imgPos);
        img.setAttribute("src", imgs[imgPos]);
    }
}
