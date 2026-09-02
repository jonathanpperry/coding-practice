// Week 8 - Day 2: Clone Graph

// Moves from an implicit grid graph
// to an explicit adjacency-list graph.

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (!node) {
    return null;
  }

  let cloneMap = new Map();

  function dfs(node) {
    if (cloneMap.has(node)) {
      return cloneMap.get(node);
    }

    let clone = new Node(node.val);
    cloneMap.set(node, clone);

    for (let neighbor of node.neighbors) {
      clone.neighbors.push(dfs(neighbor));
    }

    return clone;
  }

  return dfs(node);
};
