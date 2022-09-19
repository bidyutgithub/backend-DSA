//cyclic array rotation by one

function rotate(arr, n)
{
  var x = arr[n-1], i;
  for(i = n-1; i > 0; i--)
      arr[i] = arr[i-1];
  arr[0] = x;   
}
 
var arr = [1, 2, 3, 4, 0];
var n = arr.length;
 for(var i = 0; i< n; i++)
    console.log(arr[i] + " ");
      rotate(arr, n);
 
console.log("Rotated array is");
for(var i = 0; i < n; i++)
    console.log(arr[i] + " ");


            //output-[0,1,2,3,4]