import { count } from "console";
import fs from "fs";
// let count = 0;
console.log("starting...");
fs.readFile("./file1",(err,data)=>{
    let count = 0;
    err ? console.log("error : " + err) : console.log(data.toString());
    let array = data.toString().split(" ");
    console.log(array);
    for(let i=0; i<array.length; i++)
    {
        if(array[i].charAt(0) == 'a' || array[i].charAt(0) == 'e' || array[i].charAt(0) == 'i' || array[i].charAt(0) == 'o' || array[i].charAt(0) == 'u' || array[i].charAt(0) == 'A' || array[i].charAt(0) == 'E' || array[i].charAt(0) == 'I' || array[i].charAt(0) == 'O' || array[i].charAt(0) == "U")
        {
            count++;
        }
    }
    console.log(count);
});
console.log("Ending...");
