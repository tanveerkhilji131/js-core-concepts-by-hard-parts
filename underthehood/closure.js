// closure brain is store a vlaue not forget data 
function onlyonecall(callback){
    let checkfn = false;
    return function(){
        if (!checkfn) {
        checkfn = true;
       return  callback();
    }
    else{
        console.log("your Fn is alrady call");
        
    }
    }
}
function hello() {
    console.log("hello gys");
}

let onlyonecallfn = onlyonecall(hello);
onlyonecallfn()  //hello gys
onlyonecallfn()  //your Fn is alrady call

// nasted function 
function outer() {
    let counter = 0;
     function inner(){
        counter++
console.log(counter);

    }
   return inner

}

let incrmentValue = outer();
incrmentValue()
incrmentValue()

let b = ["hello"];
let ans = b.toString().replace("hello","gello")
console.log(ans);
