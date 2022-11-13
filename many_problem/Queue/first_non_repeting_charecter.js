//first non repeting charecter in string

const nonRepeatingChar = (str = "") => {
    let splitArr = str.split(""); // [l,o,v,e,l,e,e,t,c,o,d,e]
  
    for (let i = 0; i < splitArr.length; i++) {
      for (let j = 0; j < splitArr.length; j++) {
        // ignore i and j equal
        if (splitArr[i] === splitArr[j] && i !== j) {
          break;
        } else if (splitArr.length - 1 === j) {
          return splitArr[i];
        }
      }
    }
    return -1;
  };
  
  console.log(nonRepeatingChar("loveleetcode"));
         //output- v