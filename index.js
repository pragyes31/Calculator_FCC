const displayResult = document.querySelector(".display-result");
const displayEquation = document.querySelector(".display-equation");
const numberButtons = document.querySelectorAll(".calc-num-button");
const operationButtons = document.querySelectorAll(".calc-ops-button");
const clearContent = document.querySelector(".calc-clear-button");
const equalBtn = document.querySelector(".calc-equal-button");
const decimalBtn = document.querySelector(".calc-decimal-button");
const negBtn = document.querySelector(".calc-ops-neg-button");
let firstNum = "";
let secondNum = "";
let operator = "";
let result = "";
function flushContent() {
  displayResult.innerHTML = "";
  firstNum = "";
  secondNum = "";
  operator = "";
}

function displayNum() {
  console.log("neg");
  if (operator === "") {
    console.log(this.innerHTML);
    firstNum += this.innerHTML;
    displayResult.innerHTML += this.innerHTML;
  } else {
    secondNum += this.innerHTML;
    displayResult.innerHTML += this.innerHTML;
  }
}

function displayOps() {
  if (firstNum == "") {
    return;
  }
  operator = this.innerHTML;
  displayResult.innerHTML = "";
}

function calculate() {
  if (firstNum !== "" && operator !== "" && secondNum !== "") {
    switch (operator) {
      case "+":
        result = parseFloat(firstNum) + parseFloat(secondNum);
        break;
      case "-":
        result = parseFloat(firstNum) - parseFloat(secondNum);
        break;
      case "*":
        result = parseFloat(firstNum) * parseFloat(secondNum);
        break;
      case "/":
        result = parseFloat(firstNum) / parseFloat(secondNum);
        break;
    }
    displayResult.innerHTML = result;
    firstNum = result;
    secondNum = "";
    operator = "";
  }
}

function test() {}

// function checkDecimal() {
//   if(firstNum.indexOf('.') !== -1 || secondNum.indexOf('.') !== -1)  {
//     display.innerHTML = this.innerHTML;
//   }
//   else return;
// }

numberButtons.forEach(numButton =>
  numButton.addEventListener("click", displayNum)
);
operationButtons.forEach(opsButton =>
  opsButton.addEventListener("click", displayOps)
);
clearContent.addEventListener("click", flushContent);
equalBtn.addEventListener("click", calculate);
//decimalBtn.addEventListener("click", checkDecimal);
negBtn.addEventListener("click", test);
/*
Test cases to code
1. first input number can be negative as well
2. Decimal values
*/
