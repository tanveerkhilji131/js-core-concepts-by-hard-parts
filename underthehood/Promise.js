// function display(data){
//     console.log(data);
    
// }
// function printHello(){
//     console.log("hello");
    
// }
// function blackfor300ms(){}
// setTimeout(printHello,0);

// const futureData = fetch("https://twitter.com/will/tweets/1");
// futureData.then(display)

// // blackfor300ms()

// console.log("First Me");

// this is asynchronous code and this code under the hood work 
// this two feture is browser feture first is setTimeout and secode is Datafetch 
// and under the hood setTimeout browser inside send a call back queue
// and .than fucntion resolve to create a microtask queue and put value
// and after microtask value chack to go and check callback queue
// this process is Event loop handle first  global works complete to check microtask queue and after complete to check callback queue