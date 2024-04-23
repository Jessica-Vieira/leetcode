/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
        for (num in nums){
        nums.push(nums[num])
    }
    return nums
};