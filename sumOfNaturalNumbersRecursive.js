function sumOfNaturalNumbersRecursive(n)
        {
            if(n<=0) return 0;
            return n + sumOfNaturalNumbersRecursive(n-1);
        }
        var num = parseInt(prompt("Enter a natural number: "));
        if(num>0)
        {
            document.write("The sum of natural numbers up to " + num +" is : "+sumOfNaturalNumbersRecursive(num));
        }
        else{
            document.write("Please enter a positive natural number.")
}
