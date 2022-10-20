/*
Given an array of integers arr, find the sum of min(b), where b ranges over every (contiguous) subarray of arr. Since the answer may be large, return the answer modulo 109 + 7.

 

Example 1:

Input: arr = [3,1,2,4]
Output: 17
Explanation: 
Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4]. 
Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
Sum is 17.

Example 2:
Input: arr = [11,81,94,43,3]
Output: 444
 
*/


var sumSubarrayMins = function (arr) {
    let n = arr.length;
    let M = Math.pow(10, 9) + 7;
  
    let ple = PLE(arr);
    let nle = NLE(arr);
    console.log(ple, nle);
    let sum = 0;
    for (let i = 0; i < n; i++) {
      sum = (sum + arr[i] * ((i - ple[i]) * (nle[i] - i))) % M;
    }
    return sum;
  };
  
  function PLE(arr) {
    let stack = [0];
    let ans = [-1];
  
    for (let i = 1; i < arr.length; i++) {
      let peak = stack[stack.length - 1];
  
      if (arr[peak] < arr[i]) {
        ans.push(peak);
      } else if (arr[peak] >= arr[i]) {
        while (stack.length > 0 && arr[peak] >= arr[i]) {
          stack.pop();
          peak = stack[stack.length - 1];
        }
        if (stack.length === 0) {
          ans.push(-1);
        } else if (arr[peak] < arr[i]) {
          ans.push(peak);
        }
      }
  
      stack.push(i);
    }
  
    return ans;
  }
  
  function NLE(arr) {
    let n = arr.length;
    let stack = [n - 1];
    let ans = [n];
  
    for (let i = n - 2; i >= 0; i--) {
      if (arr[stack[stack.length - 1]] < arr[i]) {
        ans.push(stack[stack.length - 1]);
      } else if (arr[stack[stack.length - 1]] >= arr[i]) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] > arr[i]) {
          stack.pop();
        }
        if (stack.length === 0) {
          ans.push(n);
        } else if (arr[stack[stack.length - 1]] <= arr[i]) {
          ans.push(stack[stack.length - 1]);
        }
      }
  
      stack.push(i);
    }
  
    return ans.reverse();
  }