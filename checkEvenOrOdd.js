function checkEvenOrOdd(num)
{
    let num = prompt("Enter a number: ")

    if(num%2==0)
    {
        alert(num + " is even");
        //document.write(num + " is even");
    }
    else
    {
        alert(num + " is odd")
        //document.write(num + " is odd");
    }
}

checkEvenOrOdd();
