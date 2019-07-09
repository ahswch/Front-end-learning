/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let mark = x > 0 ? true : false;
  x = mark ? (x + '') : (-x + '');
  let length = x.length;
  x = x[x.length - 1] == 0 && x.length !== 1 ? x.substring(0, length - 1) : x;
  x = parseInt(x.split('').reverse().join(''));
  if (x >= 2147483648) {
    return 0;
  }
  x = mark ? x : -x;
  return x;
};
