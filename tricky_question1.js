function showThis() {
    console.log(this);
}

setTimeout(showThis, 1000);  // What will this print? 

//window in browsers / globalThis 
