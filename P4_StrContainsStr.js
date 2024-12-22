//P4_StrContainsStr.js

let str = "straightforward";
let subStr = "forward";
let isSubstring = false;
// console.log(str.length,subStr.length);
for(let i=0; i<=str.length-subStr.length; i++){
    let match = true;
    for(let j=0; j<subStr.length; j++){
        if(str[i+j] !== subStr[j]){//s !== f, 
            match = false;
            break;
        }
    }
    if(match){
        isSubstring = true;
        break;
    }
}
console.log(isSubstring ? `The string "${str}" contains "${subStr}"` : `The String "${str} not contains "${subStr}"`)