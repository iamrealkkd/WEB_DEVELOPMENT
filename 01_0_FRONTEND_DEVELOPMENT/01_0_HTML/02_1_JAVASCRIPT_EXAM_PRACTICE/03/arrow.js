const prompt = require("prompt-sync")();

let a = Number(prompt("Enter a number: "));
let b = Number(prompt("Enter a number: "));

const add = (a, b) => a + b;

console.log("Sum =", add(a, b));
