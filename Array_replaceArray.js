function replacearray(arr) {
            console.log("Originial array is:"+arr)
            for(let i = 0; i < arr.length; i++) 
            {
                if (arr[i] % 2 === 0 || arr[i] % 5 === 0) {
                    arr[i] = "hello";
                }
            }
            console.log("Modified Array: " + arr);
        }
    
        let arr = [15, 2, 3, 4, 25, 59, 39, 25, 90];
        replacearray(arr);
