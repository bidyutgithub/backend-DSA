/*
Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

    Integers in each row are sorted from left to right.
    The first integer of each row is greater than the last integer of the previous row.

    Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
    Output: true

*/


// Javascript program to find whether
// a given element is present
// in the given 2-D matrix
 
var M = 3;
var N = 4;
 
// Basic binary search to
// find an element in a 1-D array
function binarySearch1D(arr, K)
{
    var low = 0;
    var high = N - 1;
    while (low <= high) {
        var mid = low + parseInt((high - low) / 2);
 
        // if element found return true
        if (arr[mid] == K)
            return true;
 
        // if middle less than K then
        // skip the left part of the
        // array else skip the right part
        if (arr[mid] < K)
            low = mid + 1;
        else
            high = mid - 1;
    }
 
    // if not found return false
    return false;
}
 
// Function to search an element
// in a matrix based on
// Divide and conquer approach
function searchMatrix(matrix, K)
{
    var low = 0;
    var high = M - 1;
    while (low <= high) {
        var mid = low + parseInt((high - low) / 2);
 
        // if the element lies in the range
        // of this row then call
        // 1-D binary search on this row
        if (K >= matrix[mid][0]
            && K <= matrix[mid][N - 1])
            return binarySearch1D(matrix[mid], K);
 
        // if the element is less than the
        // starting element of that row then
        // search in upper rows else search
        // in the lower rows
        if (K < matrix[mid][0])
            high = mid - 1;
        else
            low = mid + 1;
    }
 
    // if not found
    return false;
}
 
// Driver code
var matrix = [ [1,3,5,7],
               [10,11,16,20],
               [23,30,34,60]
                ];
var K = 3;
if (searchMatrix(matrix, K))
    console.log( "True" );
else
    console.log( "False" );