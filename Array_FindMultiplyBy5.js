function display(a)
            {
                let newArr = [];
                for(let i=0; i<a.length; i++)
                {
                    if(a[i]%5==0)
                    {
                        newArr.push(a[i]);
                    }
                }
                console.log(newArr);
            }

            let arr = [1,2,3,4,5,6,7,8,9,10];
            display(arr);
            
