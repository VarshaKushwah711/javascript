let arr = [20,10,60,50,40,5];
            console.log("Array :")
            for(let i of arr)
            {
                console.log(i);
            }
            for(let i=0; i<arr.length; i++)
            {
                for(let j=i+1; j<arr.length; j++)
                {
                    if(arr[i]>arr[j])
                    {
                        //let temp = 0
                        let temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                    }
                }
            }
            
            console.log("Second max : " + arr[arr.length-2]);
            console.log("Second min : " + arr[1]);
