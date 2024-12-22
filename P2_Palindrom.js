//2. Check if a String is a palindrome
// P2_Palindrom.js
let str = "nitin";
let rev = "";

for(let i=str.length-1; i>=0; i--){
    rev += str[i];
}
// rev = str.split('').reverse().join('')

console.log(str === rev ? "palindrome" : "not palindrom");


