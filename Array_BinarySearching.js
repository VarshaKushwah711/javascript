let arr = [12,34,65,69,70,87,89];
            let search = parseInt(prompt("Enter a number : "));
            let s = 0;
            let e = arr.length-1;
            let flag = 0;

            for(let i=0; i<arr.length; i++)
            {
                let mid = parseInt((s+e)/2);
                if(search === arr[mid])
                {
                    flag = 1;
                    break;
                }
                else if(search > arr[mid])
                {
                    s = mid + 1;  
                }
                else
                {
                    e = mid - 1;
                }
            
            }

            flag ? document.write("present") : document.write("not Present");
            
