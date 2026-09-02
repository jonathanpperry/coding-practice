// 🔎 Find First and Last Position of Element in Sorted Numsay
// Given an array of integers nums sorted in non-decreasing order,
// find the starting and ending position of a given target value.
// If target is not present, return [-1, -1].

// You must write an algorithm with O(log n) runtime.

// 🎯 One hint
// You've already learned that binary search can find a target.
// Now ask:
// What if, after finding the target, I don't actually want to stop?
// Think about what you could change about the search
// after finding a match to keep looking for the boundary.

function findFirstAndLastPos(nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let res = [-1, -1];

  while (l <= r) {
    let mid = Math.floor(l + (r - l) / 2);

    if (nums[mid] === target) {
      // Save mid as valid answer and search left
      res[0] = mid;
      r = mid - 1;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  // Now we kick off a search to find last occurrence
  l = 0;
  r = nums.length - 1;

  while (l <= r) {
    let mid = Math.floor(l + (r - l) / 2);

    if (nums[mid] === target) {
      // Save mid as valid answer and search right
      res[1] = mid;
      l = mid + 1;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return res;
}
