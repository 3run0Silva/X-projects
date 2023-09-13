"use strict"

let firstCard = 22;
let secondCard = 1;

let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message;

function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🤔"
    } else if (sum === 21) {
        message = "Congratulations! You've got Blackjack 🤑" 
        hasBlackjack = true;
    } else {
        message = "To bad, the game is over. 😭"
        isAlive = false;
    }
    console.log(message)
}

console.log(isAlive)


