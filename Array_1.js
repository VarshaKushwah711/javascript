//Declare array And Print 
let studentarr = [101,"varsha","indore","21"];
console.log(studentarr);

//size of array

console.log("size : " + studentarr.length);



//for loop
for(let i=0; i<studentarr.length; i++)
{
     console.log(studentarr[i]);
}       

//for-of loop not using index value
for(let i of studentarr)
{
      console.log(i);
}
