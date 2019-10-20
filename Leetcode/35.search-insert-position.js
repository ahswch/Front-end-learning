/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let len = nums.length,
    i;
  for (i = 0; i < len; i++) {
    if (target <= nums[i]) {
      return i;
    }
  }
  return len;
};
