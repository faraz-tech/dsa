/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        nums.push(nums[i]);
    }
    return nums;
};

console.log(getConcatenation([1,2,1]));