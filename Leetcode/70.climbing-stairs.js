/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let arr = [];
    arr[0] = 0;
    arr[1] = 1;
    arr[2] = 2;
    for (let i = 3; i <= n; i++) {
      arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[n];
};
// @lc code=end

