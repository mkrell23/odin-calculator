let btnZero = document.getElementById("0");
let btnOne = document.getElementById("1");
let btnTwo = document.getElementById("2");
let btnThree = document.getElementById("3");
let btnFour = document.getElementById("4");
let btnFive = document.getElementById("5");
let btnSix = document.getElementById("6");
let btnSeven = document.getElementById("7");
let btnEight = document.getElementById("8");
let btnNine = document.getElementById("9");

let btnClear = document.getElementById("clear");

let btnAdd = document.getElementById("plus");
let btnSubtract = document.getElementById("minus");
let btnMultiply = document.getElementById("multiply");
let btnDivide = document.getElementById("divide");
let btnEquals = document.getElementById("equals");

let display = document.getElementById("display");

let firstNumber = null;
let secondNumber = null;
let operation = null;
let displayNumber = "";

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function setOperation(newOperation){
    if (!firstNumber){
        firstNumber = parseInt(displayNumber);
        displayNumber = "";
        display.innerText = displayNumber
        operation = newOperation;
    } else if (operation) {
        equals()
        operation = newOperation
    } else {
        operation = newOperation;
        displayNumber = "";
        display.innerText = displayNumber
    }
}

function equals(){
    if (firstNumber && operation) {
        secondNumber = parseInt(displayNumber);
        displayNumber = "";
        firstNumber = doOperation();
        display.innerText = firstNumber;
        operation = null;
        secondNumber = null;
    }
}

function doOperation(){
    switch (operation) {
        case "add":
            return add(firstNumber, secondNumber);
        
        case "subtract":
            return subtract(firstNumber, secondNumber);

        case "multiply":
            return multiply(firstNumber, secondNumber);

        case "divide":
            console.log(secondNumber);
            if (secondNumber === 0){
                alert("LOL no");
                return firstNumber;
            } else {
                return divide(firstNumber, secondNumber);
            }

        default:
            break;
    }
}

btnAdd.addEventListener('click', () => {
    setOperation("add")
});

btnSubtract.addEventListener('click', () => {
    setOperation("subtract")
});

btnMultiply.addEventListener('click', () => {
    setOperation("multiply")
});

btnDivide.addEventListener('click', () => {
    setOperation("divide")
});

btnEquals.addEventListener('click', () => {
    equals();
});

btnZero.addEventListener('click', () => {
    console.log("Zero");
    displayNumber += "0"
    display.innerText = displayNumber
});

btnOne.addEventListener('click', () => {
    console.log("One");
    displayNumber += "1"
    display.innerText = displayNumber
});

btnTwo.addEventListener('click', () => {
    console.log("Two");
    displayNumber += "2"
    display.innerText = displayNumber
});

btnThree.addEventListener('click', () => {
    console.log("Three");
    displayNumber += "3"
    display.innerText = displayNumber
});

btnFour.addEventListener('click', () => {
    console.log("Four");
    displayNumber += "4"
    display.innerText = displayNumber
});

btnFive.addEventListener('click', () => {
    console.log("Five");
    displayNumber += "5"
    display.innerText = displayNumber
});

btnSix.addEventListener('click', () => {
    console.log("Six");
    displayNumber += "6"
    display.innerText = displayNumber
});

btnSeven.addEventListener('click', () => {
    console.log("Seven");
    displayNumber += "7"
    display.innerText = displayNumber
});

btnEight.addEventListener('click', () => {
    console.log("Eight");
    displayNumber += "8"
    display.innerText = displayNumber
});

btnNine.addEventListener('click', () => {
    console.log("Nine");
    displayNumber += "9"
    display.innerText = displayNumber
});

btnClear.addEventListener('click', () => {
    console.log("Cleared");
    displayNumber = ""
    display.innerText = displayNumber
    firstNumber = null;
    secondNumber = null;
    operation = null;
});




display.innerText = displayNumber ? displayNumber : "";
