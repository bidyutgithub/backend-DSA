// //queschion 1

// /* SMPSEQ3 - Fun with Sequences
// You are given a sorted sequence of n integers S = s1, s2, ...,
//  sn and a sorted sequence of m integers Q = q1, q2, ..., qm. Please,
//  print in the ascending order all such si that does not belong to Q. */


/*
function sequence(arr1,arr2){
    startarr1=0;
    startarr2=0;
    ans=[];
    while(startarr1<arr1.length && startarr2<arr2.length){
      if(arr1[startarr1]<arr2[startarr2]){
        while(arr1[startarr1]<arr2[startarr2]){
          ans.push(arr1[startarr2])
          startarr1++;
        }
      }
      else if(arr1[startarr1]>arr2[startarr2]){
        while(arr1[startarr1]> arr2[startarr2]){
          startarr2++;
        }
      
      if(arr1[startarr1]==arr2[startarr2]){
        startarr2++;
        startarr1++;
      }
    }
    else if(arr2[startarr2]==arr1[startarr1]){
      startarr1++;
      startarr2++;
    }
  }
  if(startarr1!=arr1.length-1){
    while(startarr1!=arr1.length-1){
      ans.push(arr1[startarr1])
    }
  }
  if(startarr2==arr2.length){
    while(startarr1<arr1.length){
      ans.push(arr1[startarr1])
      startarr1++;
    }
  }
  return ans
  }
  console.log(sequence([-2,-1,0,1,4],[-3,-2,-1,1,2,3]))

     */

//   //output-1,4
//   ==============================================
//   //another way

/*
  function sequence(arrS=[], arrQ=[] ){
    ans=[]
    for(let i=0;i<arrS.length;i++){
      for(let j=0;j<arrQ.length;j++){
        if(arrS[i]==arrQ[j]){
          arrS[i]="same"
        }
      }
    }
    for(let i=0;i<arrS.length;i++){
      if(arrS[i]!="same")
      ans.push(arrS[i])
   }
    return ans
  }
  console.log(sequence([-2,-1,0,1,4],[-3,-2,-1,1,2,3]));
    
  */


//                       //output-0,4
//===================================================================
//queschion 2

/*
    You are given a sorted sequence of n integers S = s1, s2, ..., 
    sn and a sorted sequence of m integers Q = q1, q2, ..., qm. Please,
     print in the ascending order all such si that does not belong to Q.
*/

/*  
function sequence(arrS=[], arrQ=[] ){
    let ans=[]
    let i=0
    let j=0
    
    while(i!=arrS.length && j!=arrQ.length){
      if(arrS[i]>arrQ[j]){
        while(arrQ[j]<arrS[i]){
          j=j+1
        }
      }
      if(arrS[i]<arrQ[j]){
        while(arrS[i]<arrQ[j]){
          i++
       }
     }
      if(arrS[i]==arrQ[j]){
        ans.push(arrS[i])
        i++
      }
    }

    return ans
  }
  console.log(sequence([-2,-1,0,1,4],[-3,-2,-1,1,2,3]));
          //output--2,-1,1

          */
//================================================================
//queschion 2  another way


/*
let S = [-2,-1,0,1,4];
let Q = [-3,-2,-1,1,2,3];

let lenOfS = S.length;
let lenOfQ = Q.length;
let storeIndexOfSinQ = []

for(let i=0; i<lenOfS; i++){
  for(let j=0; j<lenOfQ; j++){
    if(S[i] === Q[j]){
      storeIndexOfSinQ.push(j);
      break;
    }
  }
}
console.log(storeIndexOfSinQ)
for(let k=0; k<storeIndexOfSinQ.length;k++){
  console.log(Q[storeIndexOfSinQ[k]])
}   //output=  -2,-1,1

*/
//==========================================================================
//queschion 3

/*
    You are given a sequence of n integers S = s1, s2, ..., sn and a sequence of m integers Q = q1, q2, ..., qm. Please,
     print in the ascending order all such i, that si = qi, i<=n, i<=m.
     Input:
      5
      -2 -2 -1 1 4 
      6
      -3 -2 -1 1 2 3

      Output:
      2 3 4

*/

    /*

    let S = [-2,-2,-1,1,4];
let Q = [-3,-2,-1,1,2,3];

let lenOfS = S.length;
let lenOfQ = Q.length;
let maxlength = lenOfQ >= lenOfS ? lenOfQ : lenOfS;

for(let i=0; i<maxlength; i++){
  if(Q[i] === S[i]){
      console.log(i+1)
    }
  }
       //  Output:
              2 3 4
    */