var obj = { a: 1 };
var foo = obj;
foo.a = 2;
console.log(obj.a);


//2

// Explanation: Objects are reference types in JavaScript. When you assign obj to foo, both variables refer to the same object in memory. Changing foo.a will modify obj.a as well, because they point to the same object.