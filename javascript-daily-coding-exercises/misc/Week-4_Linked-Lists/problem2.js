/**
 * function ListNode(val, next = null) {
 *   this.val = val;
 *   this.next = next;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  const dummy = new ListNode(0);
  let current = dummy;

  let carry = 0;
  let p1 = l1;
  let p2 = l2;

  while (p1 !== null || p2 !== null || carry > 0) {
    const val1 = p1 ? p1.val : 0;
    const val2 = p2 ? p2.val : 0;

    const sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);

    current.next = new ListNode(sum % 10);
    current = current.next;

    if (p1) p1 = p1.next;
    if (p2) p2 = p2.next;
  }


  return dummy.next;
}
