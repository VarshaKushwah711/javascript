//Q1. Find the kth largest and kth smallest element in array
        let arr = [1,52,42,12,34,43,54,5];
        let max = min = arr[0];
        for(let i=0; i<arr.length; i++)
        {
            if(arr[i]>max)
            {
                max = arr[i];
            }
            else if(arr[i]<min)
            {
                min = arr[i];
            }
        }

        console.log("largest element : " + max);
        console.log("smallest element : " + min);
