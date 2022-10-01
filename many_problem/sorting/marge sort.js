   /==============marge one array sort=========================
       ///////////divide conquror/////////////
   function MergeSort(arr,start,end){
    if(start>=end) return;

    let mid = parseInt((start+end)/2);
    MergeSort(arr,start,mid);
    MergeSort(arr,mid+1,end);
    merge(arr,start,mid,end);
}

function merge(arr,start,mid,end){
    let m1 = mid - start + 1;
    let m2 = end - mid;

    let a1 = new Array(m1);
    let a2 = new Array(m2);

    for(let i = 0;i<m1;i++){
        a1[i] = arr[start + i];
    }
    for(let j = 0;j<m2;j++){
        a2[j] = arr[mid+1+j];
    }

    let p1 = 0; //a1
    let p2 = 0; //a2
    let k = start; //res
    while(p1 < a1.length && p2 < a2.length){
        if(a1[p1] < a2[p2]){
            arr[k] = a1[p1];
            p1++;
            k++;
        }
        else{
            arr[k] = a2[p2];
            p2++;
            k++;
        }
    }

    if(p1 == a1.length){
        while(p2 != a2.length){
            arr[k] = a2[p2];
            k++;
            p2++;
        }
    }
    if(p2 == a2.length){
        while(p1 != a1.length){
            arr[k] = a1[p1];
            k++;
            p1++;
        }
    }
    return arr;
}

let arr = [14,33,27,10,35,19,42,44];
MergeSort(arr,0,7)
console.log(arr)
//output-[ 10, 14, 19, 27, 33, 35, 42, 44 ]

==============another way upper coad===========
function merge(arr,start,mid,end){
  let left=arr.slice(start,mid+1);
  let right=arr.slice(mid+1,end+1);
  
  let i=0;
  let j=0;
  let k=start;
  
  while(i<left.length && j<right.length){
    if(left[i]<right[j]){
      arr[k] = left[i];
      i++;
     
    }
    else{
      arr[k] = right[j];
      j++;
      
    }
    k++;
   
  }
  while(i < left.length){
    arr[k] = left[i];
    i++;
    k++;
  }
  
  while(j < right.length){
    arr[k] = right[j];
    j++;
    k++;
  }
  return;
}
 function mergeSort(arr,start,end){
     if(start >=end){
       return;
     }
     let mid= Math.floor((start+end)/2);
     mergeSort(arr,start,mid);
     mergeSort(arr,mid+1,end);
     return merge(arr,start,mid,end);
   }
 let arr=[7,4,2,5,8];
 mergeSort(arr, 0,arr.length-1);
 console.log(arr);
    //output-2,4,5,7,8


===============two sorted array with merge sort================

//input--[2,4,5,6]  //a1
//       [1,3,4,8]  //a2


function MergeSort(a1,a2){
    let result=[];
    let p1=0; //a1
    let p2=0;  //a2
    let k=0;  //result
    while(p1 < a1.length && p2 < a2.length){
      if(a1[p1] <a2[p2]){
        result[k]=a1[p1];  //or use ---result.push(a1[p1])
         p1++;
         k++;
    }
      else{
       result[k]=a2[p2];  //or use ---result.push(a2[p2])
         p2++;
         k++;
    }
  }
  if(p1==a1.length){
    while(p2 !=a2.length){
      result[k]=a2[p2]  //or use ---result.push(a2[p2])
      k++;
      p2++;
    }
  }
    if(p2==a2.length){
    while(p1 !=a1.length){
      result[k]=a1[p1]  //or use ---result.push(a2[p2])
      k++;
      p1++;
    }
  }
    return result;
    
  }
  console.log(MergeSort([2,4,5,6],[1,3,4,8]));
  =============simple two sorted array in merge sort=======

  function merge(arr1,arr2){
    let i=0;
    let j=0;
    let result=[];
    
    while(i<arr1.length && j<arr2.length){
      if(arr1[i] <arr2[j]){
        result.push(arr1[i])
        i++;
      }
      else{
        result.push(arr2[j])
        j++;
      }
    }
    while(i<arr1.length){
      result.push(arr1[i]);
       i++;
    }
    while(j<arr2.length){
      result.push(arr2[j])
      j++;
    }
    return result;
  }
  result=merge([1,3,5],[2,4,8,10]);
  console.log(result);
  
  
  
  
  

=================Merge Sorted Arrays divide conquror==================

function MergeSortedArrays(a1,a2){
  //Create an array 
  let res = [];
  let p1 = 0; //a1
  let p2 = 0; //a2
  let k = 0; //res
  while(p1 < a1.length && p2 < a2.length){
      if(a1[p1] < a2[p2]){
          res.push(a1[p1]);
          p1++;
          k++;
      }
      else{
          res.push(a2[p2]);
          p2++;
          k++;
      }
  }
  if(p1 == a1.length){
      while(p2 != a2.length){
          res.push(a2[p2]);
          k++;
          p2++;
      }
  }
  if(p2 == a2.length){
      while(p1 != a1.length){
          res.push(a1[p1]);
          k++;
          p1++;
      }
  }
  return res;
}

let arr = MergeSortedArrays([2,4,5,6],[1,3,4]);
console.log(arr);
let med
let n = arr.length;
if(n % 2 == 0)
  med = (arr[n/2]+arr[(n/2)-1])/2;

else
  med = arr[parseInt(n/2)];

console.log(med)
===================