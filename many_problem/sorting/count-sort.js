//count sort 
const countSort = (givenArray) => {
	const maxElement = Math.max(...givenArray)

	let frequency = new Array(maxElement+1).fill(0);

	for(let i =0; i< givenArray.length; i++){
		frequency[givenArray[i]] += 1;
	}

	// frequency = []

	let i = 0, j = 0;
	console.log(frequency)
	while(i <= maxElement){
		console.log('i', i)
		if(frequency[i] > 0){
			givenArray[j] = i;
			frequency[i]--;
			j++;
		}else{
			i++;
		}
	}
	return givenArray
}


let givenArray = [1, 4, 2, 3, 1, 1];
countSort(givenArray);
console.log("Result",countSort(givenArray));
console.log(givenArray);
=========================================================

//count sort

const countSort = (givenArray) => {
    const maxElement = Math.max(...givenArray)
    const minElement = Math.min(...givenArray)
    const range = maxElement - minElement + 1;
  
    let frequency = new Array(range).fill(0);
  
    for (let i = 0; i < givenArray.length; i++){
         frequency[givenArray[i] - minElement]++;
    }
        
       
    console.log("Frequency");
    
     console.log(frequency);
 
     for (let i = 1; i < range; i++){
            frequency[i] += frequency[i - 1];
     }
 
     console.log("Frequency Sum");
     console.log(frequency);
 
    
    resultArray = new Array(givenArray.length).fill(0);
 
     for (let i = givenArray.length - 1; i >= 0; i--) {
        resultArray[frequency[givenArray[i] - minElement] - 1] = givenArray[i];
        frequency[givenArray[i] - minElement]--;
    }
 
     for (let i = 0; i < givenArray.length; i++){
         givenArray[i] = resultArray[i];
     }
  
 }
 
  let givenArray = [1, 4, 2, 3, 1, 1];
  countSort(givenArray);
  console.log("Result");
 console.log(givenArray);
