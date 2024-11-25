import fs from "fs";

console.log("At the start");

fs.writeFile("./file1","Hello My name is varsha kushwah...", (err)=>{

    err ? console.log(err) : console.log("Data write successful...");

})
console.log("at the end");
