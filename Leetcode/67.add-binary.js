/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  var self = this;
  let res = [],
    num = 0,
    addOne = 0;
  let diffLen = a.length - b.length;
  if (diffLen != 0) {
    if (diffLen > 0) {
      b = copy(b, diffLen)
    } else {
      a = copy(a, -diffLen)
    }
  }
  for (let i = a.length - 1; i >= 0; i--) {
    num = parseInt(a[i]) + parseInt(b[i]) + addOne;
    if (num >= 2) {
      res[i] = num - 2;
      addOne = 1;
    } else {
      res[i] = num;
      addOne = 0;
    }
  }
  if (addOne === 1) {
    res.unshift(1);
  }
  return res.join('');
};
function copy (string, addLen) {
  for (let i = 0; i < addLen; i++) {
    string = 0 + string;
  }
  return string;
}
// @lc code=end

