// Week 7, Day 4/5 🎷
// Last Stone Weight

// You are given an array stones, where stones[i] is the weight of the ith stone.

// Each turn, choose the two heaviest stones and smash them together.

// Suppose their weights are x and y, with x <= y:

// If x === y, both stones are destroyed.
// If x !== y, the stone weighing x is destroyed, and the stone weighing y becomes y - x.

// Continue until at most one stone remains.

// Return the weight of the last remaining stone, or 0 if none remain.

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

function lastStoneWeight(stones) {
  const maxHeap = new MinPriorityQueue((a, b) => b - a);

  for (const stone of stones) {
    maxHeap.push(stone);
  }

  while (maxHeap.size() > 1) {
    const stone1 = maxHeap.pop();
    const stone2 = maxHeap.pop();

    if (stone1 !== stone2) {
      maxHeap.push(stone1 - stone2);
    }
  }

  return maxHeap.isEmpty() ? 0 : maxHeap.pop();
}
