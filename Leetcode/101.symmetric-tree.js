/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (root === null) {
      return true;
    }

    return isSymmetricHelper(root.left, root.right);
};
function isSymmetricHelper (left, right) {
  if ((left === null && right !== null) || (left !== null && right === null)) {
    return false;
  }
  if (left === null && right ===null) {
    return true;
  } else if (left.val !== right.val) {
    return false;
  }
  return isSymmetricHelper(left.left, right.right) && isSymmetricHelper(left.right, right.left);
}
// @lc code=end

