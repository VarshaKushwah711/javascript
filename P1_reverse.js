//P1_reverse.js
let str = "javascript";
let rev = "";

for(let i=str.length-1; i>=0; i--){
    rev += str[i];
}

console.log("original : " + str + ", reverse : " + rev);