const obj1 = {name: "John"};
const obj2 = {name: "John"};

console.log(obj1 == obj2);  //f
console.log(obj1 === obj2);  //f

//== ya === operator objects ka comparison unke reference (memory location) pe karta hai, na ki unke actual content pe. Isliye obj1 aur obj2 ko compare karte waqt dono false return hote hain.
