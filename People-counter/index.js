"use strict"

// Getting the html elements.
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

// Initializing the variable count at 0.
let count = 0;

// Function to increment the number of people by clicking the increment-btn.
function increment() {
    count += 1
    //console.log(count)
    countEl.textContent = count
}

// Function to save the current number of people and add it to the next count one the save-btn is clicked.
function save() {
    let savedCount = count + " - ";
    //console.log(savedCount)
    saveEl.textContent += savedCount
    count = 0;
    countEl.textContent = count
}