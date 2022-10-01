====================insertion sort====================

function insertionSort(arr){
  let n=arr.length;       //length of array
  for(let  i=0;i<n;i++){
    //the element which is picked from the unsorted region and need to be placed
     //at its right position in sorted region

    let element=arr[i]  //if your current element is at i th index the sorted region sort i-1 index 
    let j=i-1;
    while(j>=0 && element<arr[j]){
     //shifting process
      arr[j+1]=arr[j];
    j--;//cheak for another element  if present 
  }
    arr[j+1]=element;
 }
  return arr;
}
console.log(insertionSort([5,4,2,1,6]))
          //output-[ 1, 2, 4, 5, 6 ]
==============================================
//another way

function insertionSort(inputArr) {
  let n = inputArr.length;
  for (let i = 1; i < n; i++) {
      // Choosing the first element of the unsorted array
      let current = inputArr[i];
      // The last element of our sorted subarray
      let j = i - 1;

      // Find the position of the element in the sorted subarray
      while ((j > -1) && (current < inputArr[j])) {
          inputArr[j + 1] = inputArr[j];
          j--;
      }

      inputArr[j + 1] = current;
  }
  return inputArr;
}

console.log(insertionSort([7,2,4,1,5,3]))