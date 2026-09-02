// Drill 1 of 5: Maximum Depth of Binary Tree
// Given the root of a binary tree, return its maximum depth.
// The maximum depth is the number of nodes along the longest path from the root down to the farthest leaf.

// One hint

// Think recursively:
// The depth of a node is 1 + the greater depth of its two children.
// And the base case?

// What should the depth of null be?

function maxDepth(root) {
  if (!root) return 0;

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
