function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var firstNumberString = "";
  var secondNumberString = "";
  var returnArray = [];

  for (let j = l1.length - 1; j > -1; j--) {
    firstNumberString += l1[j];
  }
  for (let j = l2.length - 1; j > -1; j--) {
    secondNumberString += l2[j];
  }

  let returnNumberString = (
    parseInt(firstNumberString) + parseInt(secondNumberString)
  ).toString();

  for (let j = returnNumberString.length - 1; j > -1; j--) {
    returnArray.push(parseInt(returnNumberString[j]));
  }

  return returnArray;
};

console.log(addTwoNumbers([2,4,3], [5,6,4]));
console.log(addTwoNumbers([0], [0]));
console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]));