//find smallest element from array
            let arr = [10,20,30,40,50,60,70,80,90,8];
            let min = arr[0];
            
            console.log("Array : " + arr);//print array
            
            for(let i=0; i<arr.length; i++)
            {
                if(arr[i]<min)
                {
                    min = arr[i];
                }
            }
            console.log("Smallest element in array: " + min);
