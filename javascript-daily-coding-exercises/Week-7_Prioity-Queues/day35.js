// Week 7, Day 5/5
// Find Median from Data Stream

// Design a data structure that supports adding numbers one at a time and finding the median of all numbers seen so far.

// The median is:

// the middle value if the count is odd
// the average of the two middle values if the count is even

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
class MedianFinder {
  constructor() {
    this.maxHeap = new MinPriorityQueue((a, b) => b - a); // Max-heap for the lower half
    this.minHeap = new MinPriorityQueue((a, b) => a - b); // Min-heap for the upper half
  }

  addNum(num) {
    if (this.maxHeap.isEmpty() || num <= this.maxHeap.peek()) {
      this.maxHeap.push(num);
    } else {
      this.minHeap.push(num);
    }

    // Balance the heaps
    if (this.maxHeap.size() > this.minHeap.size() + 1) {
      this.minHeap.push(this.maxHeap.pop());
    } else if (this.minHeap.size() > this.maxHeap.size()) {
      this.maxHeap.push(this.minHeap.pop());
    }
  }

  findMedian() {
    if (this.maxHeap.size() > this.minHeap.size()) {
      return this.maxHeap.peek();
    } else {
      return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
    }
  }
}
