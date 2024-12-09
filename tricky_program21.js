function test() {
    try {
      throw new Error("Oops!");
    } catch (e) {
      return "Caught!";
    } finally {
      return "Finally!";
    }
  }
  
  console.log(test());
  


  //Explanation: In JavaScript, the finally block is always executed, even if there is a return statement in the try or catch block. Since finally returns a value, it overrides any return value from try or catch.