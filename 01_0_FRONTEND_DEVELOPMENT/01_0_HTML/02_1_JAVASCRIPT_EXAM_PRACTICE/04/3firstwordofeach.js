const prompt = require("prompt-sync")();
let sentence = prompt("Enter a sentence ");
let choice = Number(
  prompt("Enter 1 for First character, 2 for Last character: "),
);

let words = sentence.split(" ");
switch (choice) {
  case 1:
    for (let word of words) {
      console.log(word[0]);
    }
    break;
  case 2:
    for (let word of words) {
      console.log(word[word.length - 1]);
    }
    break;

  default:
    console.log("Invalid choice");
}
