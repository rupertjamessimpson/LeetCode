/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  let p1 = list1;
  let p2 = list2;

  const dummy = new ListNode(0);
  let tail = dummy;
};

// Testing data
function buildList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

let list1 = buildList([1, 2, 4]);
let list2 = buildList([1, 3, 4]);

mergeTwoLists(list1, list2);