/*queschion:-Given an array arr[] of N non-negative integers representing the height of blocks. If width of each block is 1, compute how much water can be trapped between the blocks during the rainy season. 
 Example 1:

    Input:
    N = 6
    arr[] = {3,0,0,2,0,4}
    Output:
    10

*/


function trappingwater(arr, n){
    let res = 0;
    for(let i = 1; i<n-1; i++){
      let left = arr[i];
      for(let j =0; j<i; j++){
        left = Math.max(left, arr[j]);
      }
      
      let right = arr[i];
      for(let j = i+1 ; j< n; j++){
        right = Math.max(right, arr[j]);
      }
       res = res+Math.min(left,right) - arr[i];
    }
    return res;
  }
  
  let arr = [3,0,0,2,0,4];
      let n = 6;
   
      console.log(trappingwater(arr,n));