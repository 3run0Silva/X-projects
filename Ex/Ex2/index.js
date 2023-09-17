"use strict"

// let age = 20;

// if (age < 21) {
//     console.log("You can not enter the club!")
// } else {
//     console.log("Welcome!")
// }

// let age = 100;

// if (age < 100) {
//     console.log("Not elegible")
// } else if (age === 100) {
//     console.log("Here is your birthday card from the king!")
// } else {
//     console.log("Not elegible, you've already gotten one")
// }

 let techList = ["Javascript", "HTML5", "CSS3", "VueJs", "PHP", "SQL", "MariaDB", "Wordpress"]

// for (let i = 0; i < techList.length; i++) {
//     console.log(techList[i])
// }

 let newTech = "GitHub";

techList.push(newTech) // Adds a new index to the end of the array

// Both of this methods are mutating methods.
techList.pop() // Deletes the LAST index of the array
techList.shift() // Deletes the FIRST index of the arry

// console.log(techList)

// console.log( techList[1], techList[2], techList[0])

// let me = ["Bruno", 31, true]



// for (let i = 10; i < 101; i += 10) {
//     console.log(i)
// }

// let cards = [3, 5, 6];

// for (let i = 0; i < cards.length; i++) {
//     console.log(cards[i])
// }

let sentence = ["Hello", "my", "name", "is", "Bruno"];
let greetingEl = document.getElementById("greeting-el");

for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " "
}

let player1Time = 102;
let player2Time = 107;

function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time
    }
}

let fastestTime = getFastestRaceTime()

console.log(fastestTime)

function getTotalRaceTime() {
    let total = player1Time + player2Time 
    return total 
}

let totalRaceTime = getTotalRaceTime();

console.log(totalRaceTime)


function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 12) ;
    return randomNumber
}

console.log(getRandomNumber())

let hasSolvedChallenge = false;
let hasHintsLeft = false;

if (hasSolvedChallenge === false && hasHintsLeft === false) {
    showSolution()
}

function showSolution() {
    console.log("Showing the solution....")
}

let likesDocumentaries = true;
let likesStartups = true;

if (likesDocumentaries === true || likesStartups === true) {
    recommendMovie()
}

function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}

let castles = {
    adress: "Valais",
    rooms: 7,
    available: true,
    forniture: ["tables", "chairs", "mirrors"]
}

console.log(castles.adress, castles.rooms)


let person = {
    name: "User3ds",
    age: 31,
    country: "PT"
}

function logData() {
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
}

logData()


let age = 60;

if (age < 6) {
    console.log("Free")
} else if (age < 18) {
    console.log("Child discount")
} else if (age < 27) {
    console.log("Student price")
} else if (age < 67) {
    console.log("Full price")
} else {
    console.log("Senior citizen discount")
}

let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]
console.log("The 5 largest countries in the world:")
for (let i = 0; i < largeCountries.length; i++) {
    console.log("- " + largeCountries[i])
}



// Fix the array

let largestCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];
console.log("Array before changes:", largestCountries)

largestCountries.pop()
largestCountries.shift()
console.log("Array after changes:", largestCountries)

largestCountries.push("China")
largestCountries.unshift("Pakistan")
console.log("Array with new changes:",largestCountries)



let dayOfMonth = 13;
let weekday = "Friday";

if (dayOfMonth === 13 && weekday === "Friday") {
    console.log("😱")
}

let hands = ["rock", "paper", "scissor"]

function randomHand() {
    let hand = Math.floor(Math.random() * hands.length)
       console.log(hand) 
       return hands[hand] 
}

console.log(randomHand())

let fruits = ["🍊", "🍌", "🍊", "🍊", "🍌"];

let bananaShelf = document.getElementById("banana-shelf");
let orangeShelf = document.getElementById("orange-shelf");

function destributor() {
    fruits.sort();
    console.log(fruits)

    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i] === "🍊") {
            orangeShelf.textContent += "🍊"
        } else {
            bananaShelf.textContent += "🍌"
        }
    }
}

destributor()