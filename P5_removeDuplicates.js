//P5_removeDuplicates.js
let str = "hello world !!";//space ?
let newStr = "";
for(let i=0; i<str.length; i++){
    let isDuplicate = false;
    for(let j=0; j<newStr.length; j++){
        if(str[i] == newStr[j]){
            isDuplicate = true;
            break;
        }
    }
    if(!isDuplicate){
        newStr += str[i];
    }
}
console.log("Original string: " + str + " new string: " + newStr);