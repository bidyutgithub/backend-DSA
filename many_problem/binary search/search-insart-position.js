//search insert position


/*
//queschion

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.

 

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4

*/



//coad




 
// Function to find insert position of K
function find_index(arr, n, target)
{
     
    // Traverse the array
    for(let i = 0; i < n; i++)
      
        // If K is found
        if (arr[i] == target)
            return i;
  
        // If current array element
        // exceeds K
        else if (arr[i] >target)
            return i;
  
    // If all elements are smaller
    // than K
    return n;
}
 
// Driver code
let arr = [ 1, 3, 5, 6 ];
let n = arr.length;
let target = 5
console.log(find_index(arr, n, target));