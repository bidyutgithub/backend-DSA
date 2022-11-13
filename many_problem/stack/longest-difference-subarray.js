
/*

Given an integer array arr[] of size N and an integer X,
the task is to find the longest sub-array where the absolute difference between any two elements is not greater than X. 


Examples: 
 Input: arr = { 8, 4, 2, 6, 7 }, X = 4 
Output: 4 2 6 

Explanation: 
The sub-array described by index [1, 3], i.e, { 4, 2, 6 } contains no such difference of two elements which is greater than 4.
Input: arr = { 15, 10, 1, 2, 4, 7, 2}, X = 5 
Output: 2 4 7 2 
Explanation: 
The sub-array described by indexes [3, 6], i.e, { 2, 4, 7, 2 } contains no such difference of two elements which is greater than 5. 

*/





var longestSubarray = function (nums, limit) {
    let left = 0,
      right = 0,
      max = [],
      min = [],
      num = 0;
    while (right < nums.length) {
      num = nums[right++];
      console.log("before",num,right,left);
      while (max.length && num > max[max.length - 1]) max.pop();
      while (min.length && num < min[min.length - 1]) min.pop();
      max.push(num);
      min.push(num);
      console.log("before array", max, min);
      if (max[0] - min[0] <= limit){
          continue;
      }
      num = nums[left++];
      if (max[0] == num) max.shift();
      if (min[0] == num) min.shift();
      console.log("after", num, right, left);
      console.log("after array", max, min);
    }
    return right - left;
  };
  let nums = [10, 1, 2, 4, 7, 2]; //[8, 2, 4, 7],
    limit = 5 //4;
  console.log(longestSubarray(nums, limit));