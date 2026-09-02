// Day 1 - Valid Parentheses
// Pattern: Stack + Object Lookup
// Status: Solved
// Notes: Practiced using an object literal to map closing brackets to expected opening brackets.

function isValid(s) {
  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const stack = [];

  for (const char of s) {
    if (Object.values(pairs).includes(char)) {
      stack.push(char);
    } else if (Object.keys(pairs).includes(char)) {
      if (stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// Test cases
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([])")); // true
console.log(isValid("([)]")); // false
console.log(isValid("(((")); // false