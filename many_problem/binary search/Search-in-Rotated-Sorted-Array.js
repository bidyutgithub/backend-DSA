//search in roted sorted array

/*
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown
 pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

 */

//coad

/* JavaScript Program to search an element
   in a sorted roted and pivoted array*/
 
/* Standard Binary Search function*/
function binarySearch( arr, low,
    high, target){
if (high < low)
return -1;

let mid = Math.floor((low + high) / 2); /*low + (high - low)/2;*/
if (target == arr[mid])
return mid;

if (target > arr[mid])
return binarySearch(arr, (mid + 1), high, target);

// else
return binarySearch(arr, low, (mid - 1), target);
}

/* Function to get pivot. For array 3, 4, 5, 6, 1, 2
it returns 3 (index of 6) */
function findPivot( arr, low, high){
// base cases
if (high < low)
return -1;
if (high == low)
return low;

let mid = Math.floor((low + high) / 2); /*low + (high - low)/2;*/
if (mid < high && arr[mid] > arr[mid + 1])
return mid;

if (mid > low && arr[mid] < arr[mid - 1])
return (mid - 1);

if (arr[low] >= arr[mid])
return findPivot(arr, low, mid - 1);

return findPivot(arr, mid + 1, high);
}

/* Searches an element key in a pivoted
sorted array arr[] of size n */
function pivotedBinarySearch( arr, n, target){
let pivot = findPivot(arr, 0, n - 1);

// If we didn't find a pivot,
// then array is not rotated at all
if (pivot == -1)
return binarySearch(arr, 0, n - 1, target);

// If we found a pivot, then first compare with pivot
// and then search in two subarrays around pivot
if (arr[pivot] == target)
return pivot;

if (arr[0] <= target)
return binarySearch(arr, 0, pivot - 1, target);

return binarySearch(arr, pivot + 1, n - 1, target);
}

/* Driver program to check above functions */
// Let us search 3 in below array
let arr1 = [4,5,6,7,0,1,2];
let n = arr1.length;
let target = 0;
// Function calling
console.log( "Index of the element is : "
+ pivotedBinarySearch(arr1, n, target));