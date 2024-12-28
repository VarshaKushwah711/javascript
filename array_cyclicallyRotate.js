//Q.1 write a program to cyclically rotate array by one.
            let arr = [10,20,30,40,50];
            let lastElement = arr[arr.length-1];
            for(let i=arr.length-1; i>0; i--)
            {
                arr[i] = arr[i-1];
                //console.log(i + " " +arr[i] + " " + arr[i-1] + " " + i-1);
            }
            arr[0] = lastElement;
            document.write(arr);
