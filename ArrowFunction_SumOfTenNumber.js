let sum = () => {
                
                let s = 0;
                for(let i=1; i<=10; i++)
                {
                    
                    let num = parseInt(prompt("Enter a number : "));
                    if (!isNaN(num)) { 
                        s += num;
                        //count++; 
                    }
                }
                return s;
                
            }
            console.log(sum());
