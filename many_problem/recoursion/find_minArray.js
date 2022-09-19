function findMinArray(A, n)
{
     
    // If size = 0 means whole
    // array has been traversed
    if (n == 1)
        return A[0];
         
    return Math.min(A[n - 1],
        findMinArray(A, n - 1));
}
 
// Driver Code
let A = [4, 45, 6, 50, 10, 2 ];
let n = A.length;
 
console.log( findMinArray(A, n));
       //output- 2