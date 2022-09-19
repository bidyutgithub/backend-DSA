// //sort array

// const array1 = [0,1,0,1,0,1];
// array1.sort();
// console.log(array1);
// //output-[0,0,0,1,1,1]
// ========================

// //another way

// const unArray = [0,1,0,1,0,1];

// const sortArray = (ar =[])=>{
//     let zeroArray= [];
//     let oneArray = [];
//     ar.forEach((item)=>{
//         if(item=== 0) zeroArray.push(item);
//         else oneArray.push(item);
//     });
//     return [...zeroArray,...oneArray];
// };
// console.log(sortArray(unArray));
//                 //output-[ 0, 0, 0, 1, 1, 1 ]
// ===============================================
// //another way

// //sorted this array


// const arr = [6, 1, 5, 3, 9, 6, 7, 10, 16, 4, 0, 12, 2]

// function qsort(arr){
//     if (arr.length < 2) return arr
//     // choose a pivot, p
//     // the choice of pivot can effect worst-case performance
//     // for this, we'll just use the first element.
//     const [p, ...rest] = arr

//     // partition array into element greater and lesser that the pivot
//     // this can be optimized so you don't loop through the array twice
//     const low  = rest.filter(n => n <= p)
//     const high = rest.filter(n => n > p)

//     // recurse on both partitions and reassemble as recursion unwinds
//     return [...qsort(low), p, ...qsort(high)]
// }
// console.log(qsort(arr).join(', '))
//          //output- 0, 1, 2, 3, 4, 5, 6, 6, 7, 9, 10, 12, 16

// =========================================================
// // how to check if an Array is sorted or not
 
// // Function that returns 0 if a pair
// // is found unsorted
function arraySortedOrNot(arr, n)
{
       Array has one or no element or the
    // rest are already checked and approved.
  if (n == 1 || n == 0)
        return 1;
 
    // Unsorted pair found (Equal values allowed)
  if (arr[n - 1] < arr[n - 2])
        return 0;
 
    // Last pair was sorted
    // Keep on checking
  return arraySortedOrNot(arr, n - 1);
}
 
// Driver code
let arr = [ 20, 23, 23, 5, 78, 88 ];
let n = arr.length;
 
if (arraySortedOrNot(arr, n) != 0)
    console.log("true");
else
    console.log("false");