// Drill 3 of 5: Invert Binary Tree

// Given the root of a binary tree, invert the tree and return its root.
// Inverting a binary tree means swapping the left and right children of every node.

// One hint
// At each node,
// what happens if you swap its left and right references,
// then do the same thing to its children?

function invertTree(root) {
  if (!root) return null;

  // swap left and right somehow
  [root.left, root.right] = [root.right, root.left];

  invertTree(root.left);
  invertTree(root.right);

  return root;
}
