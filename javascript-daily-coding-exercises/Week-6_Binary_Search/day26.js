// 🔄 Week 6: Binary Search
// Goal: Recognize sorted-space search problems.

// Problem 1/5
// Binary Search

// Given a sorted array of integers nums and an integer target, return the index of target if it exists. Otherwise, return -1.

// Example:
// nums = [-1,0,3,5,9,12]
// target = 9
// Output: 4

// 🎯 One hint

// Think:
// "How much of the search space can I eliminate with each comparison?"

function binarySearch(nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let mid = Math.floor(l + (r - l) / 2);

    if (nums[mid] === target) return mid;

    if (nums[mid] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return -1;
}
