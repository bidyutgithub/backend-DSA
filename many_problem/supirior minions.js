function solve(str){
    let left= new Array(str.length+1).fill(1);
    //itrate from left to right and try to get min candies in every position
    for(let i=0; i<str.lenght; i++){
        if(str[i] === '<'){
            left[i + 1]=1+left[i];
        }
    }
    let right=new Array(str.length+1).fill(1);
      // //itrate from right to left and try to get min candies in every position
      for(let i=str.length-1; i>=0; i--){
        if(str[i] === '>'){
            right[i] = 1+right[i+1];
        }
      }

      //max of each place and sum them up to get the answar
    }
    console.log(solve('<>>'));   
