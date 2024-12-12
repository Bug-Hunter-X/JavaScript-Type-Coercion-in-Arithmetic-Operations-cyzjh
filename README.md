# JavaScript Type Coercion Bug

This repository demonstrates a common, yet sometimes unexpected, behavior in JavaScript: type coercion during arithmetic operations.  The `add` function, when given a number and a string as input, concatenates the values rather than adding them numerically.

This is because JavaScript loosely types variables, allowing implicit conversions between types. While this flexibility can be convenient, it can also lead to unexpected behavior and bugs if not carefully managed.

The `bugSolution.js` file shows how to explicitly handle type checking to avoid type coercion issues.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` and run the code in your JavaScript environment (e.g., Node.js or a browser console).
3. Observe the unexpected result.