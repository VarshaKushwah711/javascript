import fs from "fs";

console.log("at the start..");
fs.readFile("./file1",(err,data)=>{
    //err ? console.log("error : " + err) : console.log(data.toString());
    fs.writeFile("./file2",data.toString(),(err)=>{
        err ? console.log("error: " + err) : console.log("Copy successfull..");
    })
})
console.log("at the end..");
