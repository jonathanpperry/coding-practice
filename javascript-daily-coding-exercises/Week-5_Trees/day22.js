// Drill 2 of 5: Same Tree
// Given the roots of two binary trees,
// determine whether the trees are structurally identical and have the same node values.

// Return true if they are the same, otherwise return false.

// One hint

// At each pair of nodes, there are three important cases:
// Both are null → they're equal.
// Exactly one is null → they're different.
// Both exist → their values must match, and their left and right subtrees must match.

function isSameTree(p, q) {
  if (!p && !q) return true;

  if ((p && !q) || (!p && q)) return false;

  if (p && q) {
    if (p.val == q.val) {
      return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    } else return false;
  }
}
