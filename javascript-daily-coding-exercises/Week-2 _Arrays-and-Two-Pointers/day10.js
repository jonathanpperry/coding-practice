// One hint
// The largest square will always come from one of the ends of the array,
// because the largest absolute value is at either end.
// Use two pointers:

// let left = 0;
// let right = nums.length - 1;

// Build the result array from the end toward the beginning.

function sortedSquares(nums) {
  let left = 0;
  let right = nums.length - 1;

  for (let i = 0; i < nums.length; i++) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      nums[nums.length - 1 - i] = nums[left] * nums[left];
      left++;
    } else {
      nums[nums.length - 1 - i] = nums[right] * nums[right];
      right--;
    }
  }

  return nums;
}
