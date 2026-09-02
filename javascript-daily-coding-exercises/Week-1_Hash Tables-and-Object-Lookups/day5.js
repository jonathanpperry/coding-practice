// One hint:

// For each number, calculate the value needed to reach the target.
// Check whether that needed value has already been stored before adding the current number to your lookup.

// const seen = {};
// seen[number] = index;
// const previousIndex = seen[neededNumber];

function twoSum(nums, target) {
  const seen = {};

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const neededNum = target - currentNum;

    if (seen[neededNum] !== undefined) {
      return [seen[neededNum], i];
    }
    seen[currentNum] = i;
  }

  return null;
}
