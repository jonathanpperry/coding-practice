// Day 2 - Ransom Note
// Pattern: Hash Map / Object Lookup
// Result: Solved with object counting
// DONE ✅

function canConstruct(ransomNote, magazine) {
  const magazineMap = {};

  for (const char of magazine) {
    magazineMap[char] = (magazineMap[char] || 0) + 1;
  }

  for (const char of ransomNote) {
    if (!magazineMap[char]) {
      return false;
    }

    magazineMap[char]--;
  }

  return true;
}

canConstruct("a", "b"); // false
