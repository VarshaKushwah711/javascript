function Factorial(num)
{
            if(num<0)
            {
                return "Factorial is not defined for negative numbers";
            }
            else if(num==0 || num==1)
            {
                return 1;
            }
            else{
                return num * Factorial(num-1);
            }

}
        
var num = prompt("Enter a number: ");
document.write("Factorial of " + num + " is: " + Factorial(num));
