// Week 7, Problem 2/5
// Top K Frequent Elements

// Given an integer array nums and an integer k, return the k most frequent elements.

// You may return the answer in any order.

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

// Function signature
function topKFrequent(nums, k) {
  // Count the frequency of each element
  const freqMap = new Map();
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // Create a min-heap to keep track of the k most frequent elements
  const minHeap = new MinPriorityQueue((a, b) => a.freq - b.freq);

  // Iterate through the frequency map
  for (const [num, freq] of freqMap) {
    // If the heap has less than k elements, push the current element
    if (minHeap.size() < k) {
      minHeap.push({ num, freq });
    } else {
      // If the current element is more frequent than the smallest in the heap, replace it
      if (freq > minHeap.peek().freq) {
        minHeap.pop();
        minHeap.push({ num, freq });
      }
    }
  }

  // Extract the numbers from the heap
  const result = [];
  while (minHeap.size() > 0) {
    result.push(minHeap.pop().num);
  }

  return result;
}
