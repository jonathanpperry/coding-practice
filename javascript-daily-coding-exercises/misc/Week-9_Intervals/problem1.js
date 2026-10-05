// Input:  [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]

// Constraints
// - 1 <= intervals.length <= 10,000
// - intervals[i].length === 2
// - 0 <= start <= end <= 100,000
// Target complexity: O(n log n) time due to sorting and O(n) output space.

// Hint: Sort by starting value, then compare each interval
// with the last interval already added to the result.

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
  const sorted = intervals
    .map((interval) => [...interval])
    .sort((a, b) => a[0] - b[0]);

  const res = [];
  res.push(sorted[0]);

  for (let i = 1; i < sorted.length; i++) {
    const curInterval = sorted[i];
    const prevInterval = res[res.length - 1];

    if (curInterval[0] <= prevInterval[1]) {
      prevInterval[1] = Math.max(prevInterval[1], curInterval[1]);
    } else {
      res.push(curInterval);
    }
  }

  return res;
}

const tests = [
  {
    name: "1. Overlapping and separate intervals",
    input: [
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ],
    expected: [
      [1, 6],
      [8, 10],
      [15, 18],
    ],
  },
  {
    name: "2. Touching endpoints count as overlap",
    input: [
      [1, 4],
      [4, 5],
    ],
    expected: [[1, 5]],
  },
  {
    name: "3. Unsorted input with contained intervals",
    input: [
      [6, 8],
      [1, 10],
      [3, 7],
      [12, 12],
    ],
    expected: [
      [1, 10],
      [12, 12],
    ],
  },
];

for (const test of tests) {
  // Copy the input so sorting or modifying it won't alter the test.
  const inputCopy = test.input.map((interval) => [...interval]);
  const actual = merge(inputCopy);

  const passed = JSON.stringify(actual) === JSON.stringify(test.expected);

  console.log(`\n${test.name}: ${passed ? "PASS" : "FAIL"}`);
  console.log("Input:   ", JSON.stringify(test.input));
  console.log("Expected:", JSON.stringify(test.expected));
  console.log("Actual:  ", JSON.stringify(actual));
}
