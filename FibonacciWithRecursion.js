function fibonacci(n)
{
    if(n<=0) return 0;
    if(n==1) return 1;
    return fibonacci(n-1) + fibonacci(n-2);

}
function printFibonacciSequence(num)
{
    for(let i = 0; i<num; i++)
    {
        document.write(fibonacci(i)+" ");
    }
    
}
        
var num = parseInt(prompt("Enter a number: "));
printFibonacciSequence(num);
