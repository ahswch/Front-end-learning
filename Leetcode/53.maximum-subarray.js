/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let len = nums.length;
  if (len === 0) {
    return;
  }
  let a = nums[0];
  let res = nums[0];
  // 表示以nums[i]结尾的连续子数组的最大和
  for (let i = 1; i < len; i++) {
    a = Math.max(nums[i], a + nums[i]);
    res = Math.max(res, a);
  }
  return res;
};
