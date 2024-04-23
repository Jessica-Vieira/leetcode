/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let arr1 = nums.slice(0,n)
    let arr2 = nums.slice(n)
    let newArray = arr1.map((elem, index) => [elem, arr2[index]]).flat()
    return newArray
};