// One hint
// Use the two-pointer technique, but this time keep the pointers a fixed distance apart.

// A dummy node can make the edge case where you're removing the head much cleaner.
// Your goal is to get left positioned immediately before the node that needs to be removed.

function removeNthFromEnd(head, n) {
  const dummy = new ListNode();
  dummy.next = head;

  let temp = dummy;

  while (n > 0) {
    temp = temp.next;
    n--;
  }

  let left = dummy;
  while (temp.next) {
    temp = temp.next;
    left = left.next;
  }

  left.next = left.next.next;
  return dummy.next;
}
