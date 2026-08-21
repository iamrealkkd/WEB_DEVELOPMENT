const prompt = require("prompt-sync")();
let word = prompt("Enter a word to check Palindrome ")
let rev = "";
for(let i = word.length - 1; i >=  0; i --){
    rev = rev + word[i];
}
if(word === rev)console.log("Palindrome");
else console.log("Not Palindrome");

