// Wednesday exercise: Intersection of Two Linked Lists
// Weekly theme: Linked-list pointer manipulation
// Technique: Pointer switching

// Given the heads of two singly linked lists,
// return the node where they intersect.
// Return null if they do not intersect.
// Intersection is based on node identity,
// not equal values. From the intersection onward,
// both lists reference the same node objects.

// Do not modify either list.

/**
 * function ListNode(val, next = null) {
 *   this.val = val;
 *   this.next = next;
 * }
 */

/**
 * @param {ListNode|null} headA
 * @param {ListNode|null} headB
 * @return {ListNode|null}
 */
function getIntersectionNode(headA, headB) {
  let a = headA;
  let b = headB;

  // Switching heads equalizes the distance traveled by both pointers
  while (a !== b) {
    if (a === null) {
      a = headB;
    } else {
      a = a.next;
    }

    if (b === null) {
      b = headA;
    } else {
      b = b.next;
    }
  }

  // a pointer contains either the intersection node
  // or null if there is no intersection
  return a;
}
