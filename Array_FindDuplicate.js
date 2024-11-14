let arr = [10,1,10,2,20,2,3,4,5,6,7,8]
            let uniqArr = [];

            console.log(arr);
            console.log("Duplicate element : ")

            for(let i=0; i<arr.length; i++)//2 index =10
            {
                let isduplicate = false;
                
                for(let j=0; j<uniqArr.length; j++)//uniqArr = [10]
                {
                    if(arr[i]===uniqArr[j])//10===10
                    {   
                        isduplicate = true;
                        console.log(arr[i]);//10
                        break;
                    }
            
                }
                if(!isduplicate)//isduplcate = false
                {
                    uniqArr.push(arr[i]);//uniqArra = [10]
                }

            }
           
