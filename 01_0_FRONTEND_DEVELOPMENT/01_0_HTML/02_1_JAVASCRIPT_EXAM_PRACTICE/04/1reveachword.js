const prompt = require("prompt-sync")();

let sentence = prompt("Enter a sentence: ");

let word = "";
let result = "";

for (let i = 0; i <= sentence.length; i++) {
  if (sentence[i] == " " || i == sentence.length) {
    let rev = "";

    for (let j = word.length - 1; j >= 0; j--) {
      rev = rev + word[j];
    }

    result = result + rev + " ";
    word = "";
  } else {
    word = word + sentence[i];
  }
}

console.log(result);
