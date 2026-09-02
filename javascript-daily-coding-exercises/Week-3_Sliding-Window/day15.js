// One hint:
// This is a fixed-size sliding window + frequency tracking problem.
// The window size is always: s1.length

// Track:
// How many times each character appears in s1
// How many times each character appears in the current window of s2

// When the window slides:
// Add the new character
// Remove the character that leaves

// A frequency array of length 26 is often cleaner than a Map here.

// Example:
// checkInclusion("adc", "dcda")
// // true

function checkInclusion(s1, s2) {
  let s1Freq = new Array(26).fill(0);

  for (let char of s1) {
    s1Freq[char.charCodeAt(0) - 97]++;
  }

  let left = 0;
  let right = 0;
  let windowFreq = new Array(26).fill(0);

  while (right < s2.length) {
    windowFreq[s2.charCodeAt(right) - 97]++;
    right++;

    // If the window size exceeds s1.length, shrink it from the left
    if (right - left > s1.length) {
      windowFreq[s2.charCodeAt(left) - 97]--;
      left++;
    }

    // Check if the current window matches the frequency of s1
    if (right - left === s1.length) {
      let isMatch = true;
      for (let i = 0; i < 26; i++) {
        if (windowFreq[i] !== s1Freq[i]) {
          isMatch = false;
          break;
        }
      }
      if (isMatch) {
        return true;
      }
    }
  }

  return false;
}
