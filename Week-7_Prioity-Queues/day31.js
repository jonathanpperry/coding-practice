// Week 7, Problem 1/5
// Kth Largest Element in an Array

// Given an integer array nums and an integer k,
// return the kth largest element in the array.
// Note that it is the kth largest element in sorted order,
// not the kth distinct element.

// Keep a MIN-HEAP containing at most k elements.

class MinPriorityQueue {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  push(value) {
    // Add new value at the end
    this.heap.push(value);

    // Restore heap property by moving it upward
    let i = this.heap.length - 1;

    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);

      // Heap property is satisfied
      if (this.heap[parent] <= this.heap[i]) {
        break;
      }

      // Swap with parent
      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];

      i = parent;
    }
  }

  pop() {
    if (this.heap.length === 0) {
      return undefined;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    // Save smallest value
    const min = this.heap[0];

    // Move last element to root
    this.heap[0] = this.heap.pop();

    // Restore heap property by moving root downward
    let i = 0;

    while (true) {
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      let smallest = i;

      if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }

      if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }

      // Heap property restored
      if (smallest === i) {
        break;
      }

      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];

      i = smallest;
    }

    return min;
  }
}

// Function signature
function findKthLargest(nums, k) {
  const minHeap = new MinPriorityQueue();

  for (let i = 0; i < nums.length; i++) {
    // push the number into the heap
    minHeap.push(nums[i]);

    // if heap size > k, pop the smallest
    if (minHeap.size() > k) {
      minHeap.pop();
    }
  }

  // After processing everything:
  // heap.peek() is the kth largest
  return minHeap.peek();
}
