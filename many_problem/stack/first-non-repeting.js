
/*
   First Unique Character in a String
   Easy

Given a string s, find the first non-repeating character in it and return its index. 
If it does not exist, return -1.

 

Example 1:
Input: s = "leetcode"
Output: 0

Example 2:
Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1
*/

function find(string) {
    let count = new Array(26);
    count.fill(0);
    let q = [];
    for (let i = 0; i < string.length; i++) {
      let ch = string.charAt(i);
      if (count[ch.charCodeAt(0) - "a".charCodeAt(0)] >= 1) {
        count[ch.charCodeAt(0) - "a".charCodeAt(0)]++;
        return;
      }
      q.push(ch);
      count[ch.charCodeAt(0) - "a".charCodeAt(0)]++;
      while (q.length != 0) {
        if (count[q[0].charCodeAt(0) - "a".charCodeAt(0)] > 1) {
          q.shift();
        } else {
          console.log(q[0]);
          break;
        }
      }
      if (q.length == 0) {
        console.log(-1);
      }
    }
  }
  find("abacacb");