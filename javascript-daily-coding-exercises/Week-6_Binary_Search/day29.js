// Week 6: Binary Search
// Day 4: 🔄 Search in Rotated Sorted Array

// Given a rotated sorted array of distinct integers nums and an integer target,
// return the index of target if it exists. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime.Array

// At every iteration:

// Find mid.
// Determine which half is sorted.
// Ask whether target falls within that sorted half.
// If yes, search that half.
// If no, search the other half.

function search(nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let mid = Math.floor(l + (r - l) / 2);

    // Check each time mid is calculated for the result
    if (nums[mid] == target) return mid;

    // Which half is sorted?

    // Left half is sorted
    if (nums[l] <= nums[mid]) {
      if (nums[l] <= target && target < nums[mid]) {
        // Target lies within sorted left half
        r = mid - 1;
      } else {
        // Target lies within unsorted right half
        l = mid + 1;
      }
    } else {
      // Right half is sorted
      
      // Target lies within the sorted right half
      if (nums[mid] < target && target <= nums[r]) {
        l = mid + 1;
      } else {
        // Target lies within unsorted left half
        r = mid - 1;
      }
    }
  }

  // Target was never found
  return -1;
}
