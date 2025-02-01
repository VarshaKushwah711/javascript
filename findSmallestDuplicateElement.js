function findSmallestDuplicateElement(...arr){
    let duplicateArr = [];
    for(let i=1; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]>arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] == arr[j]){
                duplicateArr.push(arr[i])
            }
        }
    }
    return duplicateArr[0];
} 
findSmallestDuplicateElement = findSmallestDuplicateElement(10,20,30,20,30,40,50,50);
console.log(findSmallestDuplicateElement);
