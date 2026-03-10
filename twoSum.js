/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const returnArray = [];
  const digitMap = {};

  for (i = 0; i < nums.length; i++) {
    digitMap[nums[i]] = i;
  }

  for (i = 0; i < nums.length; i++) {
    if (digitMap[target - nums[i]] !== undefined) {
      returnArray.push(i);
      returnArray.push(digitMap[target - nums[i]]);
      return returnArray;
    }
  }
  
  return [];
};


// console.log(twoSum([2,7,11,15], 9));
// console.log(twoSum([3,2,4], 6));
// console.log(twoSum([3,3], 6));