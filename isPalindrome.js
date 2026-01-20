/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const numString = x.toString();
    var i = 0;
    var j = numString.length;

    while (j > i) {
        if (numString[i] != numString[j - 1]) {
            return false;
        }
        
        i++;
        j--;
    }

    return true;
};