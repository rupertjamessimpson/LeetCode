/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const numeralValues = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000,
    }
    var sum = 0;

    for (let i = 0; i < s.length; i++) {
      if (s[i] == "I" && s[i + 1] == "V") {
        sum += 4;
        i++;
      } else if (s[i] == "I" && s[i + 1] == "X") {
        sum += 9;
        i++;
      } else if (s[i] == "X" && s[i + 1] == "L") {
        sum += 40;
        i++;
      } else if (s[i] == "X" && s[i + 1] == "C") {
        sum += 90;
        i++;
      } else if (s[i] == "C" && s[i + 1] == "D") {
        sum += 400;
        i++;
      } else if (s[i] == "C" && s[i + 1] == "M") {
        sum += 900;
        i++;
      } else {
        sum += numeralValues[s[i]];
      }
    }

    return sum;
};

console.log(romanToInt("MCMXCIV"));