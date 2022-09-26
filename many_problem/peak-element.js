//find peak element

/*

We are given an array of ‘n’ numbers .Our task is to find the peak element from the given array of numbers and return
its index .The array element is a peak element if it is not smaller than its neighbor element. Sometimes an array can
multiple peak element so return the index of first peak element of the array.
Constraints:
● arr(1 <= n <= 100)
Input:
● Array of numbers

Sample Input:
 [1, 2, 1, 3, 5, 6, 10, 15, 8]

Sample Output:
 15

*/






function findPeakIndex(arr, low, high, n) {
    var mid = low + parseInt((high - low) / 2);
    console.log(mid, low,high)
    if ((mid == 0 || arr[mid - 1] <= arr[mid]) &&
        (mid == n - 1 || arr[mid + 1] <= arr[mid]))
        return mid;

    else if (mid > 0 && arr[mid - 1] > arr[mid])
        return findPeakIndex(arr, low, (mid - 1), n);

    else
        return findPeakIndex(
            arr, (mid + 1), high, n);
}


function findPeak(arr, n) {
    return  findPeakIndex(arr, 0, n - 1, n);
}
// [1, 3, 20, 4, 1, 0]
var arr = [1, 2,1,3,5,6,10,15,8];
var n = arr.length;
console.log("peak point is "+ findPeak(arr, n));