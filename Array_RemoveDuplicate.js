let arr = [10,1,10,2,20,2,3,4,5,6,7,8]
            let uniqArr = [];

            console.log(arr);

            for(let i=0; i<arr.length; i++)//2 index =10
            {
                let isduplicate = false;
                
                for(let j=0; j<uniqArr.length; j++)               
                {
                    if(arr[i]===uniqArr[j])
                    {   
                        isduplicate = true;
                        //console.log(arr[i]);
                        break;
                    }
            
                }
                if(!isduplicate)
                {
                    uniqArr.push(arr[i]);//uniqArra = [10,1,2]
                }

            }
           
            console.log(uniqArr);