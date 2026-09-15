// Rotting Oranges

// You’re given an m x n grid where:
//
// 0 = empty cell
// 1 = fresh orange
// 2 = rotten orange
//
// Every minute, any fresh orange directly adjacent up, down,
// left, or right to a rotten orange becomes rotten.
//
// Return the minimum number of minutes until
// there are no fresh oranges left.
//
// If some fresh orange can never become rotten, return -1.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const queue = [];
  let freshCount = 0;

  // Scan once: collect rotten oranges and count fresh oranges
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      } else if (grid[i][j] === 1) {
        freshCount++;
      }
    }
  }

  const directions = [
    [1, 0], // down
    [-1, 0], // up
    [0, 1], // right
    [0, -1], // left
  ];

  let minutes = 0;
  let head = 0;

  while (head < queue.length) {
    // Number of oranges that are rotten at the start of this minute
    const size = queue.length - head;

    for (let i = 0; i < size; i++) {
      const [x, y] = queue[head++];

      for (const [dx, dy] of directions) {
        const newX = x + dx;
        const newY = y + dy;

        if (
          newX >= 0 &&
          newX < grid.length &&
          newY >= 0 &&
          newY < grid[0].length &&
          grid[newX][newY] === 1
        ) {
          grid[newX][newY] = 2;
          freshCount--;

          queue.push([newX, newY]);
        }
      }
    }

    // Newly rotten oranges were added for another BFS layer
    if (head < queue.length) {
      minutes++;
    }
  }

  return freshCount === 0 ? minutes : -1;
};
