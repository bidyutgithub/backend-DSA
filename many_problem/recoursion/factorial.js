// //factorial 

// // program to find the factorial of a number

// // take input from the user
// const number = parseInt(prompt('5'));

// // checking if number is negative
// if (number < 0) {
//     console.log('Error! Factorial for negative number does not exist.');
// }

// // if number is 0
// else if (number === 0) {
//     console.log(`The factorial of ${number} is 1.`);
// }

// // if number is positive
// else {
//     let fact = 1;
//     for (i = 1; i <= number; i++) {
//         fact *= i;
//     }
//     console.log(`The factorial is ${number} and factorial value is 5${fact}.`);
// }      //output-120
// =================================================
// //simple coad

// var a =5;
// let fact =1;
// for(let i=1;i<=a;i++){
//     fact=fact*i;
// }
// console.log(fact)
// //        //output 120
// ==================================================
// //factorial array function


// const factorial = (n) =>{
//     //base case
//     if(n=== 0) return 1;
//     let smallSum = factorial(n-1); //recursive step
//     let ans = n*smallSum; //calculate n*(n-1)
//     return ans;
//   }
//   console.log(factorial(5));
//            //output-120