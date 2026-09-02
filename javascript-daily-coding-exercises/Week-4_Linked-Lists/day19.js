class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// One hint

// Use a dummy head.
// const dummy = new ListNode();
// let tail = dummy;

// Then repeatedly:
// Compare list1.val and list2.val
// Attach the smaller node to tail.next
// Advance whichever list you took the node from
// Advance tail

// When one list runs out, attach the remainder of the other list:
// tail.next = list1 ?? list2;

// Finally, return:
// dummy.next

// The dummy node saves you from having to write special logic for the very first node of the merged list.

function mergeTwoLists(list1, list2) {
  const dummy = new ListNode();
  let tail = dummy;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }

    // Advance tail
    tail = tail.next;
  }

  // When one list runs out, attach the remainder of the other list:
  tail.next = list1 ?? list2;

  // Finally, return:
  return dummy.next;
}
