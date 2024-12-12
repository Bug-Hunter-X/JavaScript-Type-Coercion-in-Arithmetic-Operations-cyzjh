function add(a, b) {
  // Type checking using typeof
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Or throw an error: throw new Error('Inputs must be numbers');
  }
  return a + b;
}

console.log(add(1, '2')); // Output: NaN
console.log(add(1, 2));   // Output: 3