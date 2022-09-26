//using binary search

/*

Question:-
Given an array of length ‘N’, where each element denotes the position of a stall.
Now you have ‘N’ stalls and an integer ‘K’ which denotes the number of cows that are aggressive. 
To prevent the cows from hurting each other, you need to assign the cows to the stalls, such that the minimum distance between any two of them is as large as possible.
Return the largest minimum distance.
Eg

array: 1,2,4,8,9  &  k=3
O/P: 3

Explaination: 1st cow at stall 1 , 2nd cow at stall 4 and 3rd cow at stall 8

*/




let n = 5;//No of stalls
let c = 2;//No of cows

function check(num, stallArr) {
    let cows = 1,
        pos = stallArr[0]; // 1
    for (let i = 1; i < n; i++) {
        if (stallArr[i] - pos >= num) {
            pos = stallArr[i];
            cows++;
            if (cows == c) return 1;
        }
    }
    return 0;
}

function binarySearch(stallArr) {
    let start = 0,
        end = stallArr[n - 1],
        max = -1;
    while (end > start) {
        let mid = Math.floor((start + end) / 2);
        if (check(mid, stallArr) == 1) {
            if (mid > max) max = mid;
            start = mid + 1;
        } else end = mid;
    }
    return max;
}
console.log("The minimum Distance = " + binarySearch([1, 2, 4, 8, 9]));