// Drill 4 of 5: Binary Tree Level Order Traversal

// Given the root of a binary tree, return its level-order traversal.
// That means visiting the tree one level at a time, from left to right.

// One hint
// Think about what data structure you need to keep track of nodes you haven't processed yet.
// And there's one particularly useful trick for knowing where one level ends and the next begins.

function levelOrder(root) {
  // Empty tree → nothing to traverse
  if (!root) return [];

  // Final result: one array for each level
  let res = [];

  // Start with the root as our first/current level
  let currentLevel = [root];

  // Keep going while there are nodes in the current level
  while (currentLevel.length > 0) {
    // Store the VALUES of nodes at this level
    let curVals = [];

    // Nodes we'll process on the NEXT level
    let nextLevel = [];

    // Process every node belonging to the current level
    for (const node of currentLevel) {
      // Add this node's value to this level's result
      curVals.push(node.val);

      // Its children belong to the next level
      if (node.left) nextLevel.push(node.left);
      if (node.right) nextLevel.push(node.right);
    }

    // We've finished this level → add it to the final result
    res.push(curVals);

    // The next level becomes the current level
    currentLevel = nextLevel;
  }

  // Return all levels
  return res;
}
