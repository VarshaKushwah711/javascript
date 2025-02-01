function tribonacci(){
    let first = 0;
    let second = 1;
    let third = 2;
    for(let i=1; i<=10; i++){
        console.log(first);
        next = first + second + third;
        first = second;
        second = third;
        third = next;
    }
} 
tribonacci();
