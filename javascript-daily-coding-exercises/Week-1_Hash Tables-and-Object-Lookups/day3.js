// firstUniqChar("leetcode") // 0
// firstUniqChar("loveleetcode") // 2
// firstUniqChar("aabb") // -1

function firstUniqChar(s) {
  const counts = {};

  for (const char of s) {
    counts[char] = (counts[char] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (counts[s[i]] === 1) {
      return i;
    }
  }

  return -1;
}
