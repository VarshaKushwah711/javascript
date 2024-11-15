            let arr = [32,45,76,98,97,65];
            let sumOfEven = 0;
            let sumOfOdd = 0;
            
            for(let a of arr)
            {
                if(a%2==0)
                {
                    sumOfEven += a;
                }
                else{
                    sumofOdd += a;
                }
            }

            console.log("Sum of Even element: " + sumOfEven);
            console.log("Sum of Odd element: " + sumOfOdd);
            
