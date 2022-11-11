var randomnumber1 = Math.ceil(Math.random() * 6);
var randomDiceNumber = "images/dice" + randomnumber1 + ".png"
document.querySelectorAll("img")[0].setAttribute("src", randomDiceNumber)

var randomnumber2 = Math.ceil(Math.random() * 6);
var randomDiceNumber = "images/dice" + randomnumber2 + ".png"
document.querySelectorAll("img")[1].setAttribute("src", randomDiceNumber)

if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins!"
} else if (randomnumber1 < randomnumber2) {
    document.querySelector("h1").innerHTML="Player 2 Wins 🚩!"
} else {
    document.querySelector("h1").innerHTML="Draw!"
}