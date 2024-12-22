//Count Vowels in a String
//P3_countVowel.js
let str = "AEIOUa";
let count = 0;
str = str.toLowerCase();
for(let i=0; i<str.length; i++){
    if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
        count++;
    }
}
console.log("Count : " + count);