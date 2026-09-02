// Drill 3 of 5: Move Zeroes

// Given an integer array nums, move all 0s to the end while maintaining the relative order of the non-zero elements.

// You must do this in-place without making a copy of the array.

// moveZeroes([0,1,0,3,12])
// // nums becomes [1,3,12,0,0]

function moveZeroes(nums) {
  for (let i = 0, j = 0; j < nums.length; j++) {
    if (nums[j] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
  }
}
