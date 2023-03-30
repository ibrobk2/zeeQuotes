function genQuote(){
document.getElementById("btn").addEventListener('click', function(){
    const quotes = [
        "No Condition is permanent",
        "More Money More Respect",
        "Nothing is Impossible",
        "The hardway, the only way",
        "Stich in time saves nine",
        "Ones bitten twice shy",
        "No Pain, No Gain",
        "Decision Makes Men",
        "Like attracts Like",
        "Money Loves Speed",
        "Think before you leap",
        "You reap what you sow",
        "Half of a loaf is better than None"
    ];

    var rand = Math.floor(Math.random()*quotes.length);

    document.querySelector("h2").innerHTML = quotes[rand];

})

}


