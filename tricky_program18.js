(function() {
    var a = b = 3;
  })();
  
  console.log(b);
  

  //3

// Explanation: In the code, b = 3 is assigned without using var, let, or const, which makes b a global variable (not scoped to the function). However, a is declared locally inside the function with var. Therefore, b is accessible outside the function, but a is not.