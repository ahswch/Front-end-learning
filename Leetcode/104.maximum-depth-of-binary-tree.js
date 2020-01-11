/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    function getGreater(a, b) {
      return a > b ? a : b;
    }
    if (root === null) {
      return 0;
    }
    return getGreater(maxDepth(root.left), maxDepth(root.right)) + 1;
};
// @lc code=end

