// Week 7, Problem 3/5
// Merge K Sorted Lists

// You are given an array of k linked lists. Each linked list is
// sorted in ascending order.

// Merge all of the linked lists into one sorted linked list and return its head.

// JavaScript structure
// Each node looks like:
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class MinPriorityQueue {
  constructor(compare = (a, b) => a - b) {
    this.heap = [];
    this.compare = compare;
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  peek() {
    return this.heap[0];
  }

  push(value) {
    this.heap.push(value);
    this.#siftUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 0) {
      return undefined;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const min = this.heap[0];

    this.heap[0] = this.heap.pop();

    this.#siftDown(0);

    return min;
  }

  #siftUp(index) {
    let i = index;

    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);

      // Parent already has higher priority
      if (this.compare(this.heap[parent], this.heap[i]) <= 0) {
        break;
      }

      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];

      i = parent;
    }
  }

  #siftDown(index) {
    let i = index;

    while (2 * i + 1 < this.heap.length) {
      const left = 2 * i + 1;
      const right = 2 * i + 2;

      let smallerChild = left;

      // Choose whichever child has higher priority
      if (
        right < this.heap.length &&
        this.compare(this.heap[right], this.heap[left]) < 0
      ) {
        smallerChild = right;
      }

      // Current node already has higher priority
      if (this.compare(this.heap[i], this.heap[smallerChild]) <= 0) {
        break;
      }

      [this.heap[i], this.heap[smallerChild]] = [
        this.heap[smallerChild],
        this.heap[i],
      ];

      i = smallerChild;
    }
  }
}

// Function signature:

function mergeKLists(lists) {
  const minHeap = new MinPriorityQueue((a, b) => a.val - b.val);

  // Add the head of each list to the heap
  for (const list of lists) {
    if (list) {
      minHeap.push(list);
    }
  }

  // Create a dummy node to build the merged list
  const dummy = new ListNode(0);
  let current = dummy;

  // Extract the minimum element from the heap and add it to the merged list
  while (!minHeap.isEmpty()) {
    const node = minHeap.pop();

    current.next = node;
    current = node;

    // If the extracted node has a next node, add it to the heap
    if (node.next) {
      minHeap.push(node.next);
    }
  }

  return dummy.next;
}
