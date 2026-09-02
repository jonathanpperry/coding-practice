// Course Schedule.

// You have numCourses courses labeled
// from 0 to numCourses - 1.

// You’re given prerequisites, where:
// [a, b]
// means you must take course b before course a.

// Return true if it’s possible to finish all courses.
//  Otherwise return false.

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const graph = new Map();
  const visited = new Set();
  const visiting = new Set();

  // Build graph
  for (const [course, prereq] of prerequisites) {
    if (!graph.has(prereq)) {
      graph.set(prereq, []);
    }
    graph.get(prereq).push(course);
  }

  function dfs(course) {
    if (visiting.has(course)) {
      // cycle!
      return false;
    }

    if (visited.has(course)) {
      // already safely processed
      return true;
    }

    visiting.add(course);

    // DFS through prerequisites/neighbors...
    const neighbors = graph.get(course) || [];

    for (const neighbor of neighbors) {
      if (!dfs(neighbor)) {
        return false;
      }
    }

    visiting.delete(course);
    visited.add(course);
    return true;
  }

  for (let course = 0; course < numCourses; course++) {
    if (!dfs(course)) {
      return false;
    }
  }

  return true;
};
