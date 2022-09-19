// function binarySearch(arr, left, right, target){
//     if (right >= left) {
//         let mid = left + Math.floor((right - left) / 2);
 
//         // If the element is present at the middle
//         // itself
//         if (arr[mid] == target)
//             return mid;
 
//         // If element is smaller than mid, then
//         // it can only be present in left subarray
//         if (arr[mid] > target)
//             return binarySearch(arr, left, mid - 1, target);
 
//         // Else the element can only be present
//         // in right subarray
//         return binarySearch(arr, mid + 1, right, target);
//     }
 
//     // We reach here when element is not
//     // present in array
//     return -1;
// }
 
// let arr = [ 2, 3, 4, 10, 40 ];
// let target = 4;
// let n = arr.length
// let result = binarySearch(arr, 0, n - 1, target);
// (result == -1) ? console.log( "Element is not present in array")
//                    : console.log("Element is present at index " +result);

//                    //output-Element is present at index 2
// ==============================================================
// //recoursive way
// let binarySearch= function(arr,x,start,end){
//     //base case
//    if(start>end) return false;
   
//    //find the middle index
//    let mid= Math.floor((start +end)/2);
   
//    //compare mid with given key x
//    if(arr[mid] === x) return `${x} the element present in index ${mid}`;
   
   
//    //if element at mid is greater then x,
//    //search in the left half of min
   
//    if(arr[mid] > x) return binarySearch(arr,x,start,mid-1);
   
//    //if element at mid is similar then x,
//    //search in the right half of mid
   
//    else return binarySearch(arr,x,mid+1,end);
//  };
 
//  //code to exqute 
//  let arr = [1,3,5,7,8,9];
//  let x= 9;
//  let start= 0;
//  let end = arr.length-1;
 
//  console.log(binarySearch(arr,x,start,end));
//  =======================================
//  //binary search algorithm to find the n duplicate number
 
//  //find the number of 5 in the array is avalible or not

//     function isDuplicateInArray(nums ,N){
//         if(N< 0) return false; //if number is not possitive
    
        
//         let start = 0; end =nums.length;
//         while(start <=end){
//           let mid = parseInt(start +(end-start)/2);
//           if(N==nums[mid]){
//             if(mid> 0 && nums[mid-1] == N || mid<nums.length-1 && nums[mid+1]==N)
//               return true;
//           }
//           else if(N < nums[mid]) //value chacking
//             end = mid -1;   //index cheacking
//           else
//             start = mid+1; //index checking
//         }
//         return false;
//       }
//       let arr= [1,3,5,5,9];
//       console.log(isDuplicateInArray(arr,5));
//                 //output-true
//=============================================================
//simple binary search

//linear  search recursive approch

const arr=[1,2,7,5,13,15,16,21,24,28,30];
//index    0 1 2 3 4   5  6  7  8  9  10  
const target = 28;


//binary search
function binarySearch(arr,target){
  let left = 0; 
  let right = arr.length-1; 
  
  while(left<=right){
    let mid =  Math.floor ((left+right)/2)
    //let mid =  Math.floor ((right-left)/2)
    
    if(arr[mid]===target){
      return mid
    }else if(arr[mid]<target){
      left = mid+1;
    }else{
      right = mid-1;
    }
    
  }
  return -1;
  
}
console.log(binarySearch(arr,target));
//output-9


 