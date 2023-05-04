const display = document.querySelector(".result");
const clearButton = document.getElementById("clear");
const equalButton = document.getElementById("equal");
const operatorButtons = document.querySelectorAll(".operator");
const numberButtons = document.querySelectorAll(".keys button:not(.operator)");

let previousNumber = "";
let currentNumber = "";
let operator = null;

function appendNumber(number) {
    if (number === "." && currentNumber.includes(".")) return;
    currentNumber += number;
    display.value = currentNumber;
}

function chooseOperator(selectedOperator) {
    if (!currentNumber) return;
    if (previousNumber) {
        calculate();
    }
    operator = selectedOperator;
    previousNumber = currentNumber;
    currentNumber = "";
}

function calculate() {
    let result;
    const previous = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    if (isNaN(previous) || isNaN(current)) return;
    switch (operator) {
        case "+":
        result = previous + current;
        break;
        case "-":
        result = previous - current;
        break;
        case "*":
        result = previous * current;
        break;
        case "/":
        result = previous / current;
        break;
        default:
        return;
    }
    currentNumber = result.toString();
    operator = null;
    display.value = currentNumber;
}

function clear() {
    previousNumber = "";
    currentNumber = "";
    operator = null;
    display.value = "0";
}

function removeNumber() {
    const currentValue = result.textContent;
    result.textContent = currentValue.slice(0, -1);
}

function toggleSign() {
    const currentValue = parseFloat(result.textContent);
    result.textContent = -currentValue;
}


clearButton.addEventListener("click", clear);

equalButton.addEventListener("click", () => {
    calculate();
});

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        appendNumber(button.value);
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        chooseOperator(button.value);
    });
});

backspaceButton.addEventListener("click", () => {
    removeNumber();
});

plusMinusButton.addEventListener("click", () => {
    toggleSign();
});