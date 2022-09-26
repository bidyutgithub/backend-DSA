//Find the total number of sextuples  that satisfy: 

         /* 
Input
The first line contains integer N (1 ≤ N ≤ 100), the size of a set S.
Elements of S are given in the next N lines, one integer per line. Given numbers will be distinct.

Output
Output the total number of plausible sextuples.

         */

/*
   
Input:    Output:
1          1
1




Input:   Output:
2         4
2
3




Input:   Output:
2           24
-1
1



Input:   Output:
3         10
5
7
10

*/


function upper_bound(array , length , value)
{
		var low = 0;
		var high = length; // 8
		while (low < high) {
			var mid = parseInt((low + high) / 2);
			if (value >= array[mid]) {
				low = mid + 1;
			} else {
				high = mid;
			}
		}
			console.log('upper_bound:',low, 'Value:',value)
		return low;
	}
function lower_bound(array , length , value)
{
		var low = 0;
		var high = length;
		while (low < high) {
			var mid = parseInt((low + high) / 2);
			if (value <= array[mid]) {
				high = mid;
			} else {
				low = mid + 1;
			}
		}
		console.log('lower_bound:',low, 'Value:',value)
		return low;
	}
function findSextuplets(arr , n)
{
	// Generating possible values of
	// RHS of the equation
	var index = 0;
	var RHS = Array.from({length: n * n * n},
	(_, i) => 0);

	for (i = 0; i < n; i++)
	{
	// Checking d should be non-zero.
	if (arr[i] != 0)
	{
		for (j = 0; j < n; j++)
		{
			for (k = 0; k < n; k++)
			{
				RHS[index++] = arr[i] * (arr[j] + arr[k]);
			}
		}
		}
	}

	RHS.sort((a,b)=>a-b);
	
	console.log('RHS==>>>>>>', RHS)
	var result = 0;
	for (i = 0; i < n; i++)
	{
		for (j = 0; j < n; j++)
		{
			for (k = 0; k < n; k++)
			{
				var val = arr[i] * arr[j] + arr[k];
				result += (upper_bound(RHS, index, val)-lower_bound(RHS, index, val));
				console.log('result', result)
			}
		}
	}
 
	return result;
}

var arr = [2,3];
var n = arr.length;
console.log(findSextuplets(arr, n));