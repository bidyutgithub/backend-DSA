//queschion-Implement pow(x, n),
//           which calculates x raised to the power n (i.e., xn).



// Javascript program to calculate pow(x,n)
// Function to calculate x
// raised to the power y
function power(x, y)
{
    if (y == 0)
        return 1;
    else if (y % 2 == 0)
        return power(x, parseInt(y / 2, 10)) *
               power(x, parseInt(y / 2, 10));
    else
        return x * power(x, parseInt(y / 2, 10)) *
                   power(x, parseInt(y / 2, 10));
}
 
// Driver code
let x = 2;
let y = 8;
 
console.log(power(x, y));