// Problem 2/5
// Search Insert Position

// Given a sorted array of distinct integers nums and a target value target,
// return the index if the target is found.
// If it is not found,
// return the index where it would be inserted in order.

// You must write an algorithm with O(log n) runtime.

function insertPosition(nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);

    // This is the case where you actually find the target
    if (nums[mid] === target) return mid;

    if (nums[mid] < target) l = mid + 1;
    else r = mid - 1;
  }

  // Here, target was not found, so l contains index to insert
  return l;
}
