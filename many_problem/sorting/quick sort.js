==========quick sort===================

function quickSort(arr,low,high){
    //base case
     if(low>=high){
       return;
     }
     let pivot=partition(arr,low,high);
     quickSort(arr,low,pivot-1);
     quickSort(arr,pivot+1,high);
     
   }
     
  function partition(arr,low,high){
    let pivot=arr[high]; //arr[high]=array of last element

    let i=low-1;
    for(let j=low;j<high;j++){
      if(arr[j] < pivot){
      i++;
      [arr[j],arr[i]=arr[i],arr[j]];
    }
  }
  [arr[i+1],arr[high]]=[arr[high],arr[i+1]];
 return i + 1;
}
let arr=[4,2,1,5,6,8];
quickSort(arr,0,arr.length-1);
console.log(arr);
      //output-[ 1, 2, 4, 5, 6, 8 ]
==================================================================
//another way

// Quick Sort function => find (length - 1)
// and set start = 0
const quickSort = (arr) => {
  const end = arr.length - 1;
  const start = 0;
  sortArray(arr, start, end)
}

// Swapping two index value in an array
const swap = (arr, a, b) =>{
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

// Sort function which execute recursively till sort
const sortArray = (arr, low, high) => {
  // To come out of the infinite loop
  if (low >= high) {
      return;
  }
  let start = low;
  let end = high;
  // const mid = Math.floor((start + end) / 2);
  // const pivot = arr[mid];
  const pivot = arr[low]; // 4

  // Iterate till start less than end
  while (start < end) {
      while (arr[start] < pivot) {
          start++;
      }

      while (arr[end] > pivot) {
          end--;
      }

      if (start <= end) {
          swap(arr, start, end);
          start++;
          end--;
      }
  }
  // Recursively pass the two subarray as a input
console.log('low',low,'end',end, 'high',high, 'start', start)
console.log('after while iterqation',arr)
  sortArray(arr, low, end);
  sortArray(arr, start, high);
  console.log(arr)

}

// const unsortedArray = [4, 3, 10, 24, 2, 1, 7, 6, 5]
const unsortedArray = [4, 3, 2, 1, 7, 6, 5]
quickSort(unsortedArray)
console.log(unsortedArray) // [1, 2, 3, 4, 6, 7, 8, 8]

=======================================================
  ================quick select 2nd smallest==================
  
function partition(arr,low,high){
  let pivot=arr[high];
  let i=low-1;
  for(let j=low; j<high; j++){
    if(arr[j] < pivot)
    i++;
    //swap
    [arr[j],arr[i]=arr[i],arr[j]];
   
  }

 //put pivot element at the correct position
 [arr[i+1],arr[high]]=[arr[high],arr[i+1]];
 return i + 1;
}

 function kthSmallest(arr,low,high,k){
  let pivot=partition(arr,low,high);
   if(pivot==k-1){
     return arr[pivot];
   }
   if(pivot < k-1){
     return kthSmallest(arr,pivot+1,high,k);
   }
   else{
     return kthSmallest(arr,low,pivot-1,k);
   }
   
 }
let arr=[1,3,2,4,8,5];
console.log(arr);
console.log(kthSmallest([1,3,2,4,8,5],0,arr.length-1,6));


              //output-1,2,4,5,6,8
              //       8
=================quick sort meidian=============

function quickSelect_Median(arr){
  const length=arr.length;
  const halfLength=parseInt(length/2);
  //odd
    //o(n)
  if(length % 2!=0){
    return quickSelect(arr,halfLength);
  }
  //even-(o(n-1)+o(n))/2
  else{
    return (quickSelect(arr,halfLength-1)+quickSelect(arr,halfLength))/2;
  }
}
  function quickSelect(arr,k){
    if(arr.length==1){
      return arr[0];
    }
    else{
      const pivot=arr[0];
      const low=arr.filter((element)=>element<pivot);
      const high=arr.filter((element)=>element>pivot);
    if(k <low.length){
      return quickSelect(low,k);
    }
      else if(k <low.length+1){
        return pivot;
      }
      else{
        return quickSelect(high,k-low.length-1);
      }
    } 
  }
  console.log(quickSelect_Median([7,3,5,4,10]));
        //output-5