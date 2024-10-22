function findfactorial(num)
{
    let x = 1;
    for(let i=1; i<=num; i++)
    {
        x *= i;
    }
    console.log(x);
}
    
let num = parseInt(prompt("Enter a number: "));
findfactorial(num);
