//queschion-Count the number of zeros in a number

let a=740870
    let count=0
while(a>0){
 let b=a%10
  if(b==0){
    count++
  }
  a=parseInt(a/10)
    
}
console.log("count number of zero",count)

        //output-count number of zero 2