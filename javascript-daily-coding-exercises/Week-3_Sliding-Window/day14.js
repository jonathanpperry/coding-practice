// Hint: This is a variable-size sliding window.

// Maintain:
// left pointer
// right pointer
// currentSum

// When currentSum >= target
// try shrinking the window from the left.

// The trick is that because all numbers are positive,
// removing elements from the left can only decrease the sum.
// That property makes the greedy shrinking work.

// minSubArrayLen(7, [2,3,1,2,4,3])
// 2

function minSubArrayLen(target, nums) {
  let left = 0;
  let currentSum = 0;
  let minLength = Infinity;

  for (let right = 0; right < nums.length; right++) {
    currentSum += nums[right];

    while (currentSum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      currentSum -= nums[left];
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}
