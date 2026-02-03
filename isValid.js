/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (let char of s) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } 
    else {
      if (stack.length === 0) return false;

      const last = stack.pop();
      if (last !== pairs[char]) return false;
    }
  }

  // valid only if nothing left open
  return stack.length === 0;
};
