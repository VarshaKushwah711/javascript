import fs from "fs";
fs.readFile("./file1",(err,data)=>
{
    err ? console.log(err) : console.log(data.toString());

    let arr = data.toString().split(" ");
    console.log(arr);
    let maxLength = arr[0].length;
    let word = "";
    
    for(let i=0; i<arr.length; i++)
    {
        if(maxLength < arr[i].length)
        {
            maxLength = arr[i].length;
            word = arr[i];
        }
    }

    console.log(word);
    console.log(maxLength);

});
