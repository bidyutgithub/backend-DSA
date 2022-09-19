// //linear search


// // Javascript code to linearly search x in arr[]. If x
// // is present then return its location, otherwise
// // return -1
 
// function search(arr, n, x)
// {
//     let i;
//     for (i = 0; i < n; i++)
//         if (arr[i] == x)
//             return i;
//     return -1;
// }
 
// // Driver code
 
//     let arr = [ 2, 3, 4, 10, 40 ];
//     let x = 10;
//     let n = arr.length;
 
//     // Function call
//     let result = search(arr, n, x);
//     (result == -1)
//         ? console.log("Element is not present in array")
//         : console.log("Element is present at index " + result);
//        //output-Element is present at index 3
// ============================================
// //simple linear search

// //linear search

// const arr=[1,2,7,9,2,6];
// //index    0 1 2 3 4 5 
// const target =2;

// //itration approch
// //const indexes=[];
// for(let i=0; i<arr.length;i++){
//   if(arr[i]===target){
//     console.log('our target index', i)
//   }
// }
// //console.log(indexes) //global linear search jamon '2' arr er vitor 2 bar ache ata global linear search
// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

// //linear  search recursive approch

// const arr=[1,2,7,5,13,15,16,21,24,28,30];
// const target = 28;
// const count=0;

// //recursive way
// function linearSearch(arr,target,count){
//   if(arr[count]===target){
//     return count;
//   }
//   if(arr.length === count){
//     return -1;
//   }
//   return linearSearch(arr,target,count+1)
  
// }
// const result = linearSearch(arr,target,count);
// console.log('result of indexses is', result)
//      //output- result of indexses is 9


