// One hint
// This is a variable-size sliding window.

// Maintain a window that is always valid:
// "The current window contains no duplicate characters."

// When you encounter a duplicate:
// Move the left side forward until the window is valid again.

// A Set is a good starting tool.

function lengthOfLongestSubstring(s) {
  const charSet = new Set();

  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }
    charSet.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}
