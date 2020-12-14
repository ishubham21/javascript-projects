var closeBtn = document.querySelector('button')
closeBtn.addEventListener('click', () => {
    var popup = document.querySelector('.popup')
    popup.classList.add('display-off')    
})

function evalPromise(value) {

    var promise = new Promise((resolve, reject) => {
        //taking even values to resolve
        if (value % 2 == 0 && value != 0) {
            resolve("This is the message from resolve");
        }
        else {
            reject("This is the message from reject");
        }
    })
    
    promise.then((msg) => {
        console.log('Resolved');
        console.log(msg)
    })
    .catch((msg) => {
        console.log('Not resolved');
        console.log(msg);
    })

}

//write in console evalPromise(*any value here*)