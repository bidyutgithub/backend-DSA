/*
Given a list arr[] of everyday temperatures. 
For each day, the task is to find the count of days remaining for the next day with warmer temperatures. 
If there is no such day for which warmer temperature is possible then print -1.
Examples:

Input: arr[] = {73, 74, 75, 71, 69, 72, 76, 73} 
Output: {1, 1, 4, 2, 1, 1, -1, -1} 




Explanation: 
For 73 temperature, next warmer temperature is 74 which at a distance 1 
For 74 temperature, next warmer temperature is 75 which at a distance 1 
For 75 temperature, next warmer temperature is 76 which at a distance 4 
For 71 temperature, next warmer temperature is 72 which at a distance 2 
For 69 temperature, next warmer temperature is 72 which at a distance 1 
For 72 temperature, next warmer temperature is 76 which at a distance 1 
For 76 temperature, there is no valid next warmer day 
For 73 temperature, there is no valid next warmer day
Input: arr[] = {75, 74, 73, 72} 
Output: {-1, -1, -1, -1}

Recommended: Please try your approach on {IDE} first, before moving on to the solution.
Naive Approach: The idea is to iterate for each possible pairs of the array and check the next greater temperatures for each current element.
Time Complexity: O(N2) 
Auxiliary Space: O(1)
Efficient Approach: This problem basically asks to find how far is the current index from the index of next greater temperature to the temperature at the current index. The most optimal way to solve this problem is by making use of a stack. Below are the steps:

Iterate over the everyday temperature of the given array arr[] using the current index.
If the stack is empty, push the current index to the stack.
If the stack is not empty then do the following: 
If the temperature at the current index is lesser than the temperature of the index at top of the stack, push the current index.
If the temperature at the current index is greater than the temperature of the index at top of the stack, then update the no of days to wait for warmer temperature as:

*/

// JavaScript program for the above approach
 
// Function to determine how many days
// required to wait for the next
// warmer temperature


