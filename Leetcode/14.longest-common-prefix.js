/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let a = '';
  let l = strs.length
  if (l === 0) {
    return a;
  }
  for (let i = 0; i < strs[0].length; i++) {
    if (check(strs[0][i], i, strs)) {
      a += strs[0][i];
    } else {
      break;
    }
  }
  return a;
};

function check(val, index, strs) {
  var mark = true;
  for (let i = 1; i < strs.length; i++) {
    if (strs[i][index] !== val) {
      mark = false;
    }
  }
  return mark;
}
