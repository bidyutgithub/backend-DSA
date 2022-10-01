========================bubble sort=====================

function bubbleSort(arr){
    let n = arr.length; // length of array
    for(let i=0;i<n-1;i++){  //n-1 iteration
        
        var isswapped = false;

        //comparing the adjsm ent elements 
        for(let j = 0;j < n-1-i;j++){ 
            
            //if current elem is smaller and elem bigger we do need to swap 
            if(arr[j] > arr[j+1]){
                //swap element at jth and j+1 index 
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                isswapped=true;
            }
        }
         if(!isswapped){
            break;
        }
        console.log(arr)
    }
    return arr;
}
bubbleSort([5,1,4,2,8])
=========================================
//another way

function bubbleSort(inputArray) {
    for (var i = 0; i < inputArray.length; i++) { // n
        var isSwapped = false
        // Last i elements are already sorted
        for (var j = 0; j < (inputArray.length - i - 1); j++) {
            // Check if the current element is greater than the next element
            if (inputArray[j] > inputArray[j + 1]) {
                // If the condition is true then swap them
                var temp = inputArray[j]
                inputArray[j] = inputArray[j + 1]
                inputArray[j + 1] = temp
                isSwapped = true
            }
        }
        if (!isSwapped)
            break
    }
    return inputArray
}

function minbubbleSort(inputArray) {
    for (var i = 0; i < inputArray.length; i++) {
        var isSwapped = false
        // Last i elements are already sorted
        for (var j = inputArray.length - 1; j >i; j--) {
            // Check if the current element is greater than the next element
            if (inputArray[j] < inputArray[j - 1]) {
                // If the condition is true then swap them
                var temp = inputArray[j]
                inputArray[j] = inputArray[j - 1]
                inputArray[j - 1] = temp
                isSwapped = true
            }
        }
        if (!isSwapped)
            break
    }
    return inputArray
}

console.log(bubbleSort([7,4,1,0,2,5]))