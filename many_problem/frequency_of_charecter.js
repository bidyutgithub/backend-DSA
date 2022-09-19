// //freequence of characture of string

// //<<<<<<<<<object from>>>>>>>>>>>>>
// let str = "banana";
// let obj = {};
// for(let i=0;i<str.length;i++)
// {
//   if(obj[str[i]]==undefined)
//   {
//     obj[str[i]]=1;
//   }
//   else
//   {
//     obj[str[i]]+=1;
//   }
// }
// console.log(obj); 
      
//         //output-   Object { b: 1, a: 3, n: 2 }
// ​                      a: 3
// ​                      b: 1
// ​                      n: 2
// ​
// =========================

// function count(str,char){
//     let output=0;
    
//     for(let i=0; i<str.length;i++){
//       if(str.charAt(i)===char) output++;
//     }
//     return output;
//   }
  
//   let calculate = count("Banana","n");
//   console.log(calculate)    //output 2 karon n er jaygay b or a  dile output alada hobe
// =================================

// <<<<<<,,,,,,,another way>>>>>>>>>>>>>>

// function count(str,char){
//     let output=0;
   
//     for(let i=0; i<str.length;i++){
//       if(str.charAt(i)===char) output++;
//    }
//     console.log(`${char} present ${output} times`);
//   }
 
//   let calculate = count("Banana","n");
//        //output- n present 2 times