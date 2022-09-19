//anagram string to sort

const validAnagram = (str = "", target ="") =>{
    let originalChar = str.split("");
    let targetChar = target.split("");
    
    if(originalChar.length !== targetChar.length){
      return false;
    }
    else if(JSON.stringify(originalChar.sort()) === JSON.stringify(targetChar.sort())
     ){
    return true;
  }
    else
  {
    return false;
  }
  };
 validAnagram("APPLE", "EAPPL")


        //output- true