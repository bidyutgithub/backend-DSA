// //find fast and last element in the sorted array

// const arr = [5,7,7,8,8,10]
// const target = 7;

// function searchRight(arr, target){
// 	let left = -1;
// 	let right = arr.length; 

// 	while(left+1 < right){
// 		let mid = Math.floor((left+right)/2);
// 		console.log('left', left, 'right', right, 'mid', mid)
// 		if(arr[mid] > target){
// 			right = mid
// 		}else{
// 			left = mid
// 		}
// 	}

// 	console.log('left', left, 'right', right)
// 	if(arr[right -1] === target){
// 		return right-1;
// 	}else{
// 		return -1;
// 	}


// }

// function searchLeft(arr, target){
// 	let left = -1;
// 	let right = arr.length; 

// 	while(left+1 < right){
// 		let mid = Math.floor((left+right)/2);
// 		console.log('left', left, 'right', right, 'mid', mid)
// 		if(arr[mid] >= target){
// 			right = mid
// 		}else{
// 			left = mid
// 		}
// 	}

// 	console.log('left', left, 'right', right)
// 	if(arr[right] === target){
// 		return right;
// 	}
// 	else {
// 		return -1;
// 	}
// }

// function searchTarget(arr, target){
// 	const leftIndex = searchLeft(arr, target);
// 	const rightIndex = searchRight(arr, target);

// 	if(leftIndex === -1 && rightIndex === -1){
// 		return [-1,-1]
// 	}
// 	else{
// 		return [leftIndex, rightIndex]
// 	}

// }


// console.log(searchTarget(arr, target))
// ==========================================================

// //ANOTHER WAY

// //FIND FIRST AND LAST ELEMENT IN THE SORTED ARRAY

// // JavaScript program to find first and last occurrences of
// // a number in a given sorted array
 
 
// /* if x is present in arr then returns the index of
//    FIRST occurrence of x in arr[0..n-1], otherwise
//    returns -1 */
//    function first(arr,low,high,x,n)
//    {
//        if (high >= low) {
//            let mid = low + Math.floor((high - low) / 2);
//            if ((mid == 0 || x > arr[mid - 1]) && arr[mid] == x)
//                return mid;
//            else if (x > arr[mid])
//                return first(arr, (mid + 1), high, x, n);
//            else
//                return first(arr, low, (mid - 1), x, n);
//        }
//        return -1;
//    }
    
//    /* if x is present in arr then returns the index of
//       LAST occurrence of x in arr[0..n-1], otherwise
//       returns -1 */
//    function last(arr, low, high, x, n)
//    {
//        if (high >= low) {
//            let mid = low + Math.floor((high - low) / 2);
//            if ((mid == n - 1 || x < arr[mid + 1]) && arr[mid] == x)
//                return mid;
//            else if (x < arr[mid])
//                return last(arr, low, (mid - 1), x, n);
//            else
//                return last(arr, (mid + 1), high, x, n);
//        }
//        return -1;
//    }
    
//    // Driver program
    
//        let arr = [ 1, 2, 2, 2, 2, 3, 4, 7, 8, 8 ];
//        let n = arr.length;
    
//        let x = 8;
//        console.log("First Element = " + first(arr, 0, n - 1, x, n));
//        console.log("Last Element = " + last(arr, 0, n - 1, x, n));