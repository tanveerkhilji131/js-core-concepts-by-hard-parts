// function copyarrmultiplaybytwo(array) {
//     let output = [];
//     for (let i = 0; i < array.length; i++) {
//        output.push(array[i]*2)
        
//     }
//     return output;
// }
// let arr = [1,2,3];
// let finaloutput = copyarrmultiplaybytwo(arr);   //[ 2, 4, 6 ]

// but this is not a higher order function becouase this function inside value two not changeing after 
// and i make new higher order fun

function copyarrmultiplaybytwo(array,instruction) {
    let output = [];
    for (let i = 0; i < array.length; i++) {
       output.push(instruction(array[i]))
 }
    return output;
}
let arr2 = [1,2,3];
function multiplayby2(x){ return x *2}
let finaloutput2 = copyarrmultiplaybytwo(arr2, multiplayby2)
console.log(finaloutput2);
