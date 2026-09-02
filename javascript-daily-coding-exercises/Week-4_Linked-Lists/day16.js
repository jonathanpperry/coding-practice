class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// One hint
// Think in terms of three pointers:
// previous
// current
// next

// At each step:
// Save where you're going next.
// Reverse the current pointer.
// Move forward.

// The tricky part is not losing the rest of the list.

function reverseList(head) {
  let previous = null;
  let current = head;
  let next = null;

  while (current !== null) {
    next = current.next; // Save the next node
    current.next = previous; // Reverse the pointer
    previous = current; // Move previous forward
    current = next; // Move current forward
  }

  return previous; // previous is now the new head of the reversed list
}
