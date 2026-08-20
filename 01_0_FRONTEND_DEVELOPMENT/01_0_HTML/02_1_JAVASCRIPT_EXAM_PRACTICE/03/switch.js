const prompt = require("prompt-sync")();

let a = Number(prompt("Enter number a "));
let op = prompt("Enter operator (+, -, *, /): ");
let b = Number(prompt("Enter number b "));

let result;

switch (op) {
  case "+":
    result = a + b;
    break;

  case "-":
    result = a - b;
    break;

  case "*":
    result = a * b;
    break;

  case "/":
    result = a / b;
    break;

  default:
    result = "Invalid Operator";
}

console.log("Result = ", result);