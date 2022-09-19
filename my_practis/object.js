// let car = {
//     name:"audi",
//     model:"A7",
//     Model2: function(manufacturingyaar){
//         return this.model+manufacturingyaar;
//     },
// };
// console.log(car.Model2(2022)); 
// =====================


// let car = {
//     name:"audi",
//     model:"A7",
//     name:"bmw"
// };
// console.log(Object.keys(car));
// //console.log(car.name);
// console.log(Object.values(car));
//===============================
//for in loop
// let car = {
//     name:"audi",
//     model:"A7"
// };
//     for(key in car){
//        console.log(`${key} ${car[key]}`);  
//   } 
// ===========================
//JSON.stringify
// let car = {
//     name:"audi",
//     model:"A7"
// };
              /*  JSON.stringify();   //convert JSON to stringify
                   JSON.parse();       //convert string to JSON */

// let copycar= JSON.parse(JSON.stringify(car));
// copycar.manufactureDate = 2010;
// console.log(copycar);
// console.log(car)
// //         //output-{ name: 'audi', model: 'A7', manufactureDate: 2010 }
// { name: 'audi', model: 'A7' }
//=====================================
