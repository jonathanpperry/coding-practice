class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// One hint
// Use two pointers:

// let slow = head;
// let fast = head;

// Move them like this:
// slow moves 1 node at a time.
// fast moves 2 nodes at a time.

// When fast reaches the end, slow will be at the middle.

function middleNode(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}
