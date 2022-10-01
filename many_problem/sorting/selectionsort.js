=================selection sort====================
function selectionSort(arr){
    let n = arr.length;

    //n-1 iteration
    for(i=0;i<n-1;i++){
        // index of min element 
        let minidx=i;
        console.log("arr[i]",arr[i])
        console.log("arr[minidx]",arr[minidx])
        for(j=i+1;j<n;j++){

            if(arr[j]<arr[minidx]){
                minidx=j;
            }
        }
          //swap[ minidx with current element]
        [arr[minidx],arr[i]]= [arr[i],arr[minidx]];

            //[arr[1],arr[2]] =  [arr[2],arr[1]] 
        console.log(arr)
    }
    return arr;
}
selectionSort([4,5,3,2,9])
===========================================
//another way

function selectionSort(inputArray)
{
    var i, j, minimumIndex;
 
    for (i = 0; i < inputArray.length-1; i++)
    {
        // Initialize the current element as minimumIndex
        minimumIndex = i;
        for (j = i + 1; j < inputArray.length; j++)
        {
            if (inputArray[j] < inputArray[minimumIndex])
            {
                minimumIndex = j;
            }
        }
        // Swap the found minimum element with the current element
        if (minimumIndex != i)
        {
            var temp = inputArray[minimumIndex]
            inputArray[minimumIndex] = inputArray[i]
            inputArray[i] = temp
        }
    }

	return inputArray;
}


console.log(selectionSort([8,6,2,4,0]))