/*
 * @lc app=leetcode id=107 lang=javascript
 *
 * [107] Binary Tree Level Order Traversal II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    var reuslt = [],
        parent = [],
        parentData,
        cur;
    if (root === null) {
      return reuslt;
    }

    parent.push(root);

    while (parent.length > 0) {
      cur = [];
      parentData = [];

      for (var i in parent) {
        parent[i].left ? cur.push(parent[i].left) : null;
        parent[i].right ? cur.push(parent[i].right) : null;
        parentData.push(parent[i].val);
      }
      reuslt.unshift(parentData);
      parent = cur;
    }

    return reuslt;
};
// @lc code=end

