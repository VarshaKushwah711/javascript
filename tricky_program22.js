function outer() {
    let count = 0;
  
    return function inner() {
      count++;
      console.log(count);
    };
  }
  
  const counter = outer();
  counter(); // Output?
  counter(); // Output?
  const anotherCounter = outer();
  anotherCounter(); // Output?
  

//   1
//   2
//   1
  
//   Explanation:
  
//       The outer function returns a closure (inner) that has access to its local count variable.
//       When counter() is called, count starts at 0, increments to 1 on the first call, then to 2 on the second call.
//       When anotherCounter is created by calling outer() again, it gets a new count variable, so it starts at 0, and then increments to 1 when called.