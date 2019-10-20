/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let len = nums.length,
    arr = [],
    i,
    j,
    cur = nums[0];
  for (i = 1, j = 0; i < len; i++) {
    if (nums[i] !== cur) {
      j++;
      nums[j] = nums[i];
      cur = nums[i];
    }
  }
  return j + 1;
};
