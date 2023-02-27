/*
queschion:-Given an array A of n positive numbers. The task is to find the first Equilibrium Point in an array. 
Equilibrium Point in an array is a position such that the sum of elements before it is equal to the sum of elements after it.

Note: Retun the index of Equilibrium point. (1-based index)

Example 1:

Input: 
n = 5 
A[] = {1,3,5,2,2} 
Output: 3 
Explanation:  
equilibrium point is at position 3 
as elements before it (1+3) = 
elements after it (2+2). 
*/

function equilibriumPoint(a,n){

    if(n===1){
      return 1;
    }
      let prefixSum = new Array(n);
      prefixSum[0]=a[0];
  
      for(let i = 1; i < n; i++){
          prefixSum[i]= prefixSum[i-1]+a[i];
      }
  
      let suffixSum = new Array(n);
       suffixSum[n-1]=a[n-1];
  
       for(let i=n-2;i>=0;i--){
          suffixSum[i]=suffixSum[i+1]+a[i];
       }
  
       for(let i =1;i<n-1;i++){
          if(prefixSum[i-1]===suffixSum[i+1]){
              return i+1;
          }
       }
       return -1
    }
  
    let n = 5;
    let a = [1,3,5,2,2];
    console.log(equilibriumPoint(a,n));
