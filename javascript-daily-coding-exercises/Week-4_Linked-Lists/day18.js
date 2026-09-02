// One hint
// You already know the technique.

// Use:
// let slow = head;
// let fast = head;

// Move:
// slow: 1 step
// fast: 2 steps

// If there is a cycle, the fast pointer will eventually "lap" the slow pointer.
// If fast reaches null, there is no cycle.

function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow == fast) return true;
  }

  return false;
}
