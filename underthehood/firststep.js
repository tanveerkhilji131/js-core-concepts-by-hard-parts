const num = 5;
function multiplaybytwo(inputNumber) {
    let res = inputNumber*2;
    return res;
}

let out = multiplaybytwo(num);
let outtwo = multiplaybytwo(10);

// global context is created 
// num = 5 is sarved in memory
// multiplaybytwo is saved but not rum yet
// out is declared but value not yet becouse this is only call the fucntion
// and after 
//  multiplaybytwo(num); this js goes into this function
// i mean inside the fucntion exeution context :
// first is paramiter assigned inputNumber  = 5
// res calculated : res =  inputnumber * 2 = 5 * 2 = 10 
//  retern 
// and finally step retern 10 back to the global context 
// now out = 10 

// thred of execution 
// first is run top to bottom in the global context and see the function to jumps into the function and after compliting  it to jump a back to global context 


// note : memory added like variable in line by line

function fn() {
    return 9*9
}
console.log(fn());  // 81
// dont use this because thid code only assinged number value multiplay so use paramiter 

function sqare(num) {
    return num * num;
}
console.log(sqare(9)); //81
