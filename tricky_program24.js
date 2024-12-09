const a = {};
const b = { a };
a.b = b;

function hasCircularReference(obj) {
  const visited = new Set();
  
  function check(val) {
    if (val && typeof val === "object") {
      if (visited.has(val)) return true;  // Circular reference detected
      visited.add(val);
      for (let key in val) {
        if (check(val[key])) return true;
      }
    }
    return false;
  }
  
  return check(obj);
}

console.log(hasCircularReference(a)); // Output?


// true

// Explanation:

//     The object a references b, and b references a, creating a circular reference.
//     The hasCircularReference function uses a Set to track visited objects and detects when an object has already been visited, returning true for circular references.