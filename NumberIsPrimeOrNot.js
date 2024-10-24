function isPrime(num) 
{
            if(num <= 1) 
            {
                return false;
            } 
            else 
            {
            for (let i = 2; i <= Math.sqrt(num); i++) 
            {
                if (num % i === 0) 
                {
                return false;
                }
            }
            return true;
        }
}

var num = prompt("Enter a number: ");
if (isPrime(num)) {
    document.write(num + " is a prime number.");
} else {
    document.write(num + " is not a prime number.");
}

