var quotes = [
    {
        quote: 'Be yourself; everyone else is already taken.',
        author: 'Oscar Wildie'
    }, 
    {
        quote: 'Two things are infinite: the universe and human stupidity; and I amm not sure about the universe.',
        author: 'Albert Enistien'
    },
    {
        quote: 'So many books, so little time.',
        author: 'Frank Zappa'
    },
    {
        quote: 'A room without books is like a body without a soul.',
        author: 'Marcus Tullius'
    },
    {
        quote: 'Be who you are and say what you feel, because those who mind do not matter, and those who matter do not mind.',
        author: 'Bernard M. Baruch'
    },
    {
        quote: 'You know you are in love when you can not fall asleep because reality is finally better than your dreams.',
        author: 'Dr. Seuss'
    },
];
var changeBtn = document.getElementById('changeBtn');
changeBtn.addEventListener("click", changeQt);
function changeQt(){
    var qt = document.querySelector('h3');
    var author = document.querySelector('h5');
    var randomNum = randomNo();
    qt.innerHTML = quotes[randomNum].quote;
    author.innerHTML = quotes[randomNum].author;
}

function randomNo() {
    return Math.floor(Math.random() * 5) + 1;
}
