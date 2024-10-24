function largest()
{
                let num, max=0;
                for(let i=1; i<=10; i++)
                {
                    num = parseInt(prompt("Enter a number : "));
                    if(max<num)
                    {
                        max = num;
                    }  
                }
                console.log("Largest value: "+max);
                //return max;
}
largest();
//console.log("Largest value: " +largest());
