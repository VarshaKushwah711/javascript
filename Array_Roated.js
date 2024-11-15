let arr = [10,20,30,40];
let lastElement = arr[arr.length-1];

for(let i=arr.length-1; i>0; i--)
{
    arr[i] = arr[i-1];

}

arr[0] = lastElement;
for(let i of arr)
{

    console.log(i);

}
