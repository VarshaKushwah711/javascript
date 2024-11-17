//Q.2 Find the first repeating element in array of integers.
        let arr = [12,23,354,54,75,354,23,1,2];
        let isRepeating = false;

        for(let i=0; i<arr.length; i++)
        {

            for(let j=i+1; j<arr.length; j++)
            {
                if(arr[i] == arr[j])
                {
                    console.log("First repeating element in array: " + arr[i]);
                    isRepeating = true;
                    break;
                }
            
            }

            if(isRepeating)
                break;
        
        }

        !isRepeating && console.log("No repeating element in array.....");

    
