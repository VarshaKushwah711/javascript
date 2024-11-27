// 6. If the given input is a number, you should return the factorial of that number. The factorial of a natural number n is the product of the positive integers less than or equal to n. So, 2! = 2, 3! = 6, 4! = 24 and so on.
// const input = 6;
// output: 720
function factorial(n)
{
    if(n<0) return('Factorial is not defined for negative numbers');
    if(n==0 || n==1 )  return 1;
    return Array.from({length:n},(_,i) => i+1).reduce((fact,i) => fact*i,1);
}

let input = 6;
console.log(factorial(input));
