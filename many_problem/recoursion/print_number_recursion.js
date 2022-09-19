//print number using recursion

let inputeNumber = [];

const printSeries = (n) => {
    if(n === 0) return;

    printSeries(n-1);
    inputeNumber.push(n);
}
printSeries(4);
console.log(inputeNumber)   