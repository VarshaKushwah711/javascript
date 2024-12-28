let num = 153;
let temp = num;
let sum = 0;
while(num > 0){
    let lastDigit = num % 10;
    console.log(lastDigit)
    sum = sum + (lastDigit*lastDigit*lastDigit);
    num = parseInt(num / 10);
}
console.log(sum);
if(sum == temp){
    console.log(`${num} is armstrong number`);
}
