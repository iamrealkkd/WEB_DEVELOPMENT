const prompt = require("prompt-sync")();

let sentence = prompt("Enter a sentence: ");

console.log("1. First character of each word");
console.log("2. Last character of each word");

let choice = Number(prompt("Enter choice: "));

switch (choice) {
  case 1:
    for (let i = 0; i < sentence.length; i++) {
      if (i == 0 || sentence[i - 1] == " ") {
        console.log(sentence[i]);
      }
    }

    break;

  case 2:
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] == " " && i > 0) {
        console.log(sentence[i - 1]);
      }

      if (i == sentence.length - 1) {
        console.log(sentence[i]);
      }
    }

    break;

  default:
    console.log("Invalid choice");
}
