let arr1 = [10,9,8,7,6];
            let arr2 = [1,2,3,4,5];
            let mergedArray = [];
            for(let i=0; i<arr1.length; i++)
            {
                mergedArray[mergedArray.length] = arr1[i];
            }
            for(let i=0; i<arr2.length; i++)
            {
                mergedArray[mergedArray.length] = arr2[i];
            }
            console.log("Merge Array : ")
            for(let i of mergedArray)
            {
                console.log(i);
            }
