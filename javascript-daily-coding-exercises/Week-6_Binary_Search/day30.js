// 🦍 Koko Eating Bananas

// Given an integer array piles, where piles[i] represents
// the number of bananas in the ith pile,
// and an integer h representing the number of hours available,
// return the minimum integer eating speed k such that
// Koko can eat all the bananas within h hours.

// Koko can eat k bananas per hour from a single pile.

// During each hour, Koko chooses one pile and eats up to k
// bananas from it.
// If the pile has fewer than k bananas remaining, she eats
// the entire remaining pile.
// Koko cannot eat from multiple piles during the same hour.

function minEatingSpeed(piles, h) {
  let l = 1;
  let r = Math.max(...piles);
  let res = Infinity;

  // Binary search possible eating speeds
  // Valid speed → search slower
  // Invalid speed → search faster

  while (l <= r) {
    let mid = Math.floor(l + (r - l) / 2);

    let curHours = 0;

    // Check if mid is fast enough
    for (const pile of piles) {
      curHours += Math.ceil(pile / mid);
    }

    // Valid speed: save it and search for a smaller one
    if (curHours <= h) {
      res = mid;

      // Search for a smaller valid speed
      r = mid - 1;
    } else {
      // Too slow: search for a faster speed
      l = mid + 1;
    }
  }

  // After running search return minimum integer eating speed k
  return res;
}
