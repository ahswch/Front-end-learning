/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    return reverse(x) === x;
};

function reverse(x) {
    var isNegative = x < 0 ? true : false,
        result = 0,
        reminder;

    if (isNegative) {
        x = x * (-1);
    }

    while (x !== 0) {
        reminder = x % 10;
        result = result * 10 + reminder;

        x = Math.floor(x / 10);
    }

    if (result >= 2147483648) {
        return 0;
    }

    return isNegative ? result + ('-1') : result;
}
