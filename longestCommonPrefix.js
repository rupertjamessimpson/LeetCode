/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let prefix = strs[0];

  for (const word of strs.slice(1)) {
    for (let i = 0; i < word.length + 1; i++) {
      if (word[i] != prefix[i]) {
        prefix = word.slice(0, i);
        break;
      }
    }
  }

  return prefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log(longestCommonPrefix(["ab", "a"]));
