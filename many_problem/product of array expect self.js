/*
queschion:-Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/

function productExceptSelf(nums){
    let n = nums.length;
    let output = new Array(n);
    
    let prefixProduct = new Array(n);
    let suffixProduct = new Array(n);
    
    prefixProduct[0]=nums[0];
    
    for(let i=1;i<n;i++){
      prefixProduct[i]=prefixProduct[i-1]*nums[i];
    }
    suffixProduct[n-1]=nums[n-1];
    
    for(let i= n-2;i>=0;i--){
      suffixProduct[i]=suffixProduct[i+1]*nums[i];
    }
     
       output[0]=suffixProduct[1];
       output[n-1]=prefixProduct[n-2];
    
    for(let i=1;i<n-1;i++){
      output[i]=prefixProduct[i-1]*suffixProduct[i+1];
    }
    return output;
  }
  
  let nums = [1,2,3,4];
  console.log(productExceptSelf(nums))