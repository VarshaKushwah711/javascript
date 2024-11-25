import fs from "fs";

console.log("at the start..");
fs.readFile("./file1", (err,Data)=>{
    err ? console.log("error : " + err) : console.log(Data + "Read successfull...");
})
console.log("at the end..");
