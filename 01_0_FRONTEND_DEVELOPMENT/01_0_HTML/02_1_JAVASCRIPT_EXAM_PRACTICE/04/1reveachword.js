const prompt = require("prompt-sync")();
let sentence = prompt("Enter a sentence ");
let words = sentence.split(" ");
let result = "";
for(let word of words){
     let rev ="";
     for(let i = word.length - 1; i >= 0; i--){
        rev = rev + word[i];
     }

     result = result + rev + " ";
}
console.log(result);