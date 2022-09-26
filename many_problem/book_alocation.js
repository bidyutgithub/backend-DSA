
/*
===>>>QUESCHION:>>>>>

  We are given the ‘n’ number of books arranged in sorted order. Where each book has a different number of pages.
You have to allocate books to ‘s’ count of students so that the maximum number of pages allotted to a student is
minimum.
● Each student will be allotted at least one book and in contiguous order. Find the minimum possible number and if the
assignment is not valid, return -1.
Constraints:
● n(1 <= n <= 10^5)
● arr(1 <= arr[i] <= 10^5)

Input:
● Array of books(arr[])
● No of students(s)   //will 2 student are assigned
Sample Input:
 [12, 34, 67, 90]
 2
Sample Output:
 113


*/



function findPages(arr, n, s, curr_min) {
    let studentsRequired = 1,curr_sum = 0;

    for (let i = 0; i < n; i++) {
        if (arr[i] > curr_min) return false;
      
        if (curr_sum + arr[i] > curr_min) {
            studentsRequired++;
            curr_sum = arr[i];
            if (studentsRequired > s) return false;
        } else curr_sum += arr[i];
    }
    return true;
}

function BinarySearch(arr, n, s) {
    let sum = 0;
    if (n < s) return -1;
    for (let i = 0; i < n; i++) sum += arr[i];
    let start = 0,end = sum;
    let result = Number.MAX_VALUE;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (findPages(arr, n, s, mid)) {
            result = Math.min(result, mid);
            end = mid - 1;
        } else start = mid + 1;
    }
    return result;
}

let arr = [12, 34, 67, 90];//Array of Books
let s = 2; //No. of students
console.log("Minimum number of pages = " + BinarySearch(arr, arr.length, s))