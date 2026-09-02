// Drill 5 of 5 — Path Sum

// Given the root of a binary tree and an integer targetSum,
// return true if the tree has a root-to-leaf path such that
// adding up all the values along the path equals targetSum.

// A root-to-leaf path means:
// Start at the root and end at a leaf.
// You cannot stop at an intermediate node.

// One hint

// This is another problem where DFS + recursion is very natural.
// Instead of carrying the entire sum you've accumulated, consider:
// "How much sum do I still need from this node downward?"

// Base cases first. Then recurse.

function hasPathSum(root, targetSum) {
  if (!root) return false;

  if (!root.left && !root.right) {
    return root.val === targetSum;
  }

  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
}
