// const vaggies =["onion","alu","tomato"];
// const fruits = ["banana","mango","apple"];
// const vaggiesfruits= [...vaggies,...fruits];
// console.log(vaggiesfruits);
//                 //output- [ 'onion', 'alu', 'tomato', 'banana', 'mango', 'apple' ]

// ==================
// //join

// const emotion = ["my","name","is","bidyut"];

// const joined = emotion.join(" @ ")
// console.log(joined);
//        //output-my @ name @ is @ bidyut

// ================
//fill
// const emotion = ["my","name","is","bidyut"];

// const joined = emotion.fill(" @ ")
// console.log(joined);
      // output-[ ' @ ', ' @ ', ' @ ', ' @ ' ]
//=================

//splice

const namelist =["raju","pilu","saheb"];
               //  0       1      2
namelist.splice(1,0,"bidyut")
    //ekhane 1,0 use kora hoyache karon 1th starting index a output hobe tai
                  //output [ 'raju', 'bidyut', 'pilu', 'saheb' ]
    // ekhane 0 element use kora hoyache karon 1th starting index a jeta output hobe jodi 0 na di tahole 1th starting index ta delete hoya jabe
                 //output [ 'raju', 'pilu', 'saheb' ]
    console.log(namelist);