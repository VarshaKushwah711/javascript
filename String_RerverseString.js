//Q1. Reverse a String in JavaScript
// Example 1.
// Input: s = "Good”
// Output: “dooG”
    let str = "Good javascript";
    let str1 = "";
    for(let i=str.length-1; i>=0; i--)
    {
        str1 += str[i];
    }
    console.log("Original string : " + str);
    console.log("Reverse string : "+ str1);
