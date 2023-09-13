"use strict"

// let firstName = "Bruno";
// let lastName = "Silva";

// let fullName = firstName+ " " + lastName

// console.log(fullName)

// // Greetings challenge
// let name = "Linda";
// let greeting = "Hi there"

// function hello() {
//     console.log(greeting + ", " + name + "!")
// }

// hello()

// // Game challenge

// let myPoints = 3;

// function add3Points() {
//     myPoints += 3;
    
// }

// function remove1Point() {
//     myPoints -= 1;
    
// }

// add3Points()
// console.log("3 + 3 = ", myPoints)

// remove1Point()
// console.log("6 - 1 = ", myPoints)

// add3Points()
// console.log("5 + 3 = ", myPoints)

// add3Points()
// console.log("8 + 3 = ", myPoints)

// remove1Point()
// console.log("11 - 1 = ", myPoints)

// // string predition challenge

// 22
// 18
// 65
// "My points: 14" // the correct answer was 59 since even the string "My points: " + 5 + 9 in javascript the 5 and 9 will always be parsed into a string when there is a concatonation of a string and a number.
// 4
// 1114

// Error message challenge

let errorTxt = document.getElementById("error");

function purchase() {
    errorTxt.textContent = "⚠ Something went wrong, please try again ⚠"
}



// Calculator challenge
let displayEl = document.getElementById("display-el");
let dynamicOp = document.getElementById("dynamic-op");
let sum;


function add() {
    let num1 = Number(document.getElementById("input-1").value);
    let num2 = Number(document.getElementById("input-2").value);
    console.log("the + btn was clicked")
    sum = num1 + num2
    displayEl.textContent +=  sum
    dynamicOp.textContent = "+"
}

 function subtract() {
    let num1 = Number(document.getElementById("input-1").value);
    let num2 = Number(document.getElementById("input-2").value);
     console.log("the - btn was clicked")
     sum = num1 - num2
     displayEl.textContent +=  sum
     dynamicOp.textContent = "-"
 }

 function devide() {
    let num1 = Number(document.getElementById("input-1").value);
    let num2 = Number(document.getElementById("input-2").value);
     console.log("the / btn was clicked")
     sum = num1 / num2
     displayEl.textContent +=  sum
     dynamicOp.textContent = "/"
 }

 function multiply() {
    let num1 = Number(document.getElementById("input-1").value);
    let num2 = Number(document.getElementById("input-2").value);
     console.log("the * btn was clicked")
     sum = num1 * num2
     displayEl.textContent +=  sum
     dynamicOp.textContent = "*"
}