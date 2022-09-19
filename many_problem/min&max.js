//simple min & max in array

function getMin(arr, n)
{
    let res = arr[0];
      for(let i = 1; i < n; i++)
        res = Math.min(res, arr[i]);
         return res;
}
  
function getMax(arr, n)
{
    let res = arr[0];
      for(let i = 1; i < n; i++)
        res = Math.max(res, arr[i]);
        return res;
}
 
// Driver Code
let arr = [40,5,70,50,100 ];
let n = arr.length;
 
console.log("Minimum element" +
               " of array: " +
               getMin(arr, n));
console.log("Maximum element" +
               " of array: " +
               getMax(arr, n));
                  //output-Minimum element of array: 5
                  //Maximum element of array: 100