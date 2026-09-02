// One hint
// Start with:
// let left = 0;
// let right = height.length - 1;

// At each step:
// Calculate the current area.
// Update the maximum.
// Move the pointer pointing to the shorter height.
// The shorter line is the bottleneck. Moving the taller one inward can only reduce the width without guaranteeing a taller boundary.

// The area is:
// area = width * min(height[left], height[right])

// Examples
// maxArea([1,8,6,2,5,4,8,3,7])

function maxArea(height) {
  let left = 0;
  let right = height.length - 1;

  let maxArea = 0;

  while (left < right) {
    const width = right - left;

    const currentArea = width * Math.min(height[left], height[right]);
    maxArea = Math.max(maxArea, currentArea);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}
