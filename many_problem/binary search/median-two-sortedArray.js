// Median of two sorted arrays

/*
We are given with two sorted arrays a [ ] and b [ ], the task is to find the median of these two sorted arrays, where the
number of elements in the first array is n and the number of elements in the second array is m.
Constraints:
● a(1 <= n <= 100)
● b(1 <= m <= 100)
● Input:
● Array of numbers
● Array of numbers

Sample Input:
 [7, 12, 14, 15]
 [1, 2, 3, 4, 9, 11]

Sample Output:
 The median is 8

*/



function Median(A, B) {
    let n = A.length;
    let m = B.length;
    if (n > m) return Median(B, A);

    let start = 0;
    let end = n;
    let mergedArrayMid = Math.floor((n + m + 1) / 2);

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      let cut1 = mid;
      let cut2 = mergedArrayMid - mid;
      let leftA = cut1 > 0 ? A[cut1 - 1] : Number.MIN_VALUE;
      let leftB = cut2 > 0 ? B[cut2 - 1] : INT_MIN;
      let rightA = cut1 < n ? A[cut1] : INT_MAX;
      let rightB = cut2 < m ? B[cut2] : INT_MAX;

      if (leftA <= rightB && leftB <= rightA) {
        if ((m + n) % 2 == 0)
          return Math.floor(
            (Math.max(leftA, leftB) + Math.min(rightA, rightB)) / 2.0
          );
        return Math.max(leftA, leftB);
      } else if (leftA > rightB) {
        end = mid - 1;
      } else start = mid + 1;
    }
    return 0;
  }
    let arr1 = [-5, 3, 6, 12, 15];
  let arr2 = [-12, -10, -6, -3, 4, 10];
console.log("Median of the two arrays are " + Median(arr1, arr2));