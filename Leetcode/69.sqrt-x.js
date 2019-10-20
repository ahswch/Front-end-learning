/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let start = 1,
    end = x,
    mid;
    if (x === 0) {
      return 0;
    }

    while(start + 1 < end) {
      mid = start + parseInt((end - start)/2);
      if (mid * mid <= x) {
        start = mid;
      } else {
        end = mid;
      }
    }
    return start;
};
// @lc code=end

