// One hint
// Don't calculate every possible subarray.
// Start with the first window:
// const windowSum = nums[0] + nums[1] + ... + nums[k - 1];
// Then slide it:

// remove the element leaving the window
// add the element entering the window

// findMaxAverage([1, 12, -5, -6, 50, 3], 4);
// 12.75

function findMaxAverage(nums, k) {
  let maxSum = 0;
  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }

  maxSum = windowSum;

  for (let i = k; i < nums.length; i++) {
    windowSum += nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum / k;
}
