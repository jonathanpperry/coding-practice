// One hint

// This is another fixed-size sliding window.
// Instead of storing the whole window,
// store just one number:
// How many vowels are currently inside the window?

// When the window slides one character:
// If the character leaving was a vowel, subtract 1.
// If the character entering is a vowel, add 1.

function maxVowels(s, k) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let currentVowels = 0;
  let maxVowels = 0;

  // Count vowels in the first window
  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) {
      currentVowels++;
    }
  }

  maxVowels = Math.max(maxVowels, currentVowels);

  // Slide the window
  for (let i = k; i < s.length; i++) {
    // Remove the leftmost character from the window
    if (vowels.has(s[i - k])) {
      currentVowels--;
    }

    // Add the new rightmost character to the window
    if (vowels.has(s[i])) {
      currentVowels++;
    }
    maxVowels = Math.max(maxVowels, currentVowels);
  }

  return maxVowels;
}
