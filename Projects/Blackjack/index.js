"use strict";

let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

console.log(cards)

// Function to get a random card value
function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 14);
    console.log(randomCard);
    if (randomCard === 1) {
        return 11;
    } else if (randomCard > 10) {
        return 10;
    } else {
        return randomCard;
    }
}

// Function to start the game
function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards.push(firstCard, secondCard)
    sum = firstCard + secondCard;
    renderGame();  
}



// Function to render the game state
function renderGame() {
    cardsEl.textContent = "Your cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " | ";
    }

    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Congratulations! You've got Blackjack";
        hasBlackjack = true;
    } else {
        message = "Too bad, the game is over.";
        isAlive = false;
    }
    
    messageEl.textContent = message;
}

// Function to draw a new card
function getNewCard() {
    let newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard);
    renderGame();
}
