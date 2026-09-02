// // Remove dupes in place

// const nums = [1, 1, 2];

// const k = removeDuplicates(nums);

// console.log(k);    // 2
// console.log(nums); // [1, 2, ...]

// const nums = [0,0,1,1,1,2,2,3,3,4];

// const k = removeDuplicates(nums);

// console.log(k);    // 5
// console.log(nums); // [0,1,2,3,4,...]

function removeDuplicates(nums) {
  // you can use a set to remove duplicates, but the problem is asking for an in-place solution
  // so we will use a two pointer approach

  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;
}
