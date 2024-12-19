
function Armstrong(num)
            
{
            let originalNum = num;
            let r = 0;
            
            while(num>0)
            {
                let l = num % 10;
                r = r+(l*l*l);
                num = parseInt(num/10);
            }
            
            if(originalNum==r)
            {
                document.write(originalNum + " is an Armstrong Number")
            }
            else
            {
                document.write(originalNum + " is not an Armstrong Number")
            }
            
}
        
        var num = parseInt(prompt("Enter a number: "))
        Armstrong(num);
