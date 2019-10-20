/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let a = [],
    b = {
      "(": ")",
      "[": "]",
      "{": "}"
    };
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      a.push(s[i]);
    } else if (s[i] === ")" || s[i] === "}" || s[i] === "]") {
      let last = a.pop();
      if (b[last] !== s[i]) {
        return false;
      }
    }
  }
  if (a.length === 0) {
    return true;
  }
  return false;
};
