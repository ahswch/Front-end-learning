/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */
/**
 * @param {string} s
 * @return {number}
 */
const map = new Map([
  ['I', 1],
  ['V', 5],
  ['X', 10],
  ['L', 50],
  ['C', 100],
  ['D', 500],
  ['M', 1000]
]);
var romanToInt = function (s) {
  var len = s.length,
    result = 0,
    i;

  if (len === 0) {
    return 0;
  }
  for (i = 0; i < len; i++) {
    result += map.get(s.charAt(i));

    if (i > 0 && map.get(s.charAt(i)) > map.get(s.charAt(i - 1))) {
      result -= 2 * map.get(s.charAt(i - 1));
    }
  }
  return result;

};
