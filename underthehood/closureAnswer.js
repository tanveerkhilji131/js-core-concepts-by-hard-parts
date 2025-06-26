// CHALLENGE 1
function createFunction() {
 return function(){
   console.log("hello")
 }
}

// /*** Uncomment these to check your work! ***/
// const function1 = createFunction();
// function1(); // => should console.log('hello');


// CHALLENGE 2
function createFunctionPrinter(input) {
 return function(){
	console.log(input)
 }
}

// /*** Uncomment these to check your work! ***/
// const printSample = createFunctionPrinter('sample');
// printSample(); // => should console.log('sample');
// const printHello = createFunctionPrinter('hello');
// printHello(); // => should console.log('hello');


// CHALLENGE 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

// const willCounter = outer();
// const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();


function addByX(x) {
	return function(y){
	console.log(x + y)
    
  }
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
// addByTwo(1); // => should return 3
// addByTwo(2); // => should return 4
// addByTwo(3); // => should return 5

// const addByThree = addByX(3);
// addByThree(1); // => should return 4
// addByThree(2); // => should return 5

// const addByFour = addByX(4);
// addByFour(4); // => should return 8
// addByFour(5); // => should return 9


// CHALLENGE 4
function once(func) {
  let check = true;
  return function (){
    if(check == true){
      func(4);
      check = false
    }
      return 6
    
  }
}

// /*** Uncomment these to check your work! ***/
// const onceFunc = once(addByTwo);
// console.log(onceFunc(4));  // => should log 6
// console.log(onceFunc(10));  // => should log 6
// console.log(onceFunc(9001));  // => should log 6


// CHALLENGE 5
function after(count, func) {
 let check = 0;
 return function(){
    check++
    if(check == count){
        func()
    }else{
    console.log("nothing is printed")
    }
 }
}

// /*** Uncomment these to check your work! ***/
// const called = function() { console.log('hello') };
// const afterCalled = after(3, called);
// afterCalled(); // => nothing is printed
// afterCalled(); // => nothing is printed
// afterCalled(); // => 'hello' is printed


// CHALLENGE 6
function delay(func, wait) {

    return function(){
        setTimeout(()=>{
            func()
        },wait)
    }
}
// function hello(){ console.log("hello guys i am tanveer")}
// let myfunction = delay(hello,2000)
// myfunction()

// CHALLENGE 7
function rollCall(names) {
   let count = -1;
   return function(){
    count++
    if(count == names.length){
        console.log("should log 'Everyone accounted for")
    }else[

        console.log( names[count])
        
    ]
   }
}

// /*** Uncomment these to check your work! ***/
// const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
// rollCaller() // => should log 'Victoria'
// rollCaller() // => should log 'Juan'
// rollCaller() // => should log 'Ruth'
// rollCaller() // => should log 'Everyone accounted for'


// CHALLENGE 8
function saveOutput(func, password) {
  const cache = {}; 

  return function(input) {
    if (input === password) {
      return cache; 
    } else {
      const result = func(input); 
      cache[input] = result;      
      return result;              
    }
  };
}


// /*** Uncomment these to check your work! ***/
// const multiplyBy2 = function(num) { return num * 2; };
// const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
// console.log(multBy2AndLog(2)); // => should log 4
// console.log(multBy2AndLog(9)); // => should log 18
// console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }


// CHALLENGE 9
function cycleIterator(array) {
    let count = -1;
  return function () {
    count++
    if (count != array.length) {
        return array[count]
    }else{
        count = 0
       return  array[count]

    }
    
  }
}

// /*** Uncomment these to check your work! ***/
// const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
// const getDay = cycleIterator(threeDayWeekend);
// console.log(getDay()); // => should log 'Fri'
// console.log(getDay()); // => should log 'Sat'
// console.log(getDay()); // => should log 'Sun'
// console.log(getDay()); // => should log 'Fri'


// CHALLENGE 10
function defineFirstArg(func, arg) {

  return function(x){
   let ans = func(arg,x)
     return ans
  }
}

// /*** Uncomment these to check your work! ***/
// const subtract = function(big, small) { return big - small; };
// const subFrom20 = defineFirstArg(subtract, 20);
// console.log(subFrom20(5)); // => should log 15


// CHALLENGE 11
function dateStamp(func) {
    return function(x){
       let value =  func(x)
     return value
       
    }
}

// /*** Uncomment these to check your work! ***/
// const stampedMultBy2 = dateStamp(n => n * 2);
// console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }


// CHALLENGE 12
function censor() {
   let storeData = []
 return function(x,y){
   
    if(y !== undefined){
        storeData.push([x,y])
    }
  else{
    return x.replace(storeData[0][0],storeData[0][1]).replace(storeData[1][0],storeData[1][1])
    
  }

   
   
 }
}

// /*** Uncomment these to check your work! ***/
// const changeScene = censor();
// changeScene('dogs', 'cats');
// changeScene('quick', 'slow');
// console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'


// CHALLENGE 13
function createSecretHolder(secret) {
    let check = true;
    return {
        getSecret(){
            console.log(secret);
            
        },
        setSecret(x){
            if(check == true){
            secret = x
                check = false
            }
            else{
                console.log(x);
                
            }

        }
    }
   
}

// /*** Uncomment these to check your work! ***/
// obj = createSecretHolder(5)
// obj.getSecret() // => returns 5
// obj.setSecret(2)
// obj.getSecret() // => returns 2


// CHALLENGE 14
function callTimes() {
    let count = 0;
    return function(){
        count++
        console.log(count);
        
    }
}

// /*** Uncomment these to check your work! ***/
// let myNewFunc1 = callTimes();
// let myNewFunc2 = callTimes();
// myNewFunc1(); // => 1
// myNewFunc1(); // => 2
// myNewFunc2(); // => 1
// myNewFunc2(); // => 2


// CHALLENGE 15
function roulette(num) {
    let count = 0;
    return function(){
        count++
        if(count !== num && count < num){
            return "spin"
        }else if(count > num){
            return "pick a number to play again"
        }
        else{
            return "win"
        }
    }
}

// /*** Uncomment these to check your work! ***/
// const play = roulette(3);
// console.log(play()); // => should log 'spin'
// console.log(play()); // => should log 'spin'
// console.log(play()); // => should log 'win'
// console.log(play()); // => should log 'pick a number to play again'
// console.log(play()); // => should log 'pick a number to play again'


// CHALLENGE 16
function average() {
    let count = 0;
     let sum = 0;   

    return function(x){
        if(x == undefined){
            return count == 0 ? 0 : sum / count;
        }
        else{
            sum += x;
            count++
            return sum /count;
        }
       
        
    }
}

// /*** Uncomment these to check your work! ***/
// const avgSoFar = average();
// console.log(avgSoFar()); // => should log 0
// console.log(avgSoFar(4)); // => should log 4
// console.log(avgSoFar(8)); // => should log 6
// console.log(avgSoFar()); // => should log 6
// console.log(avgSoFar(12)); // => should log 8
// console.log(avgSoFar()); // => should log 8


// CHALLENGE 17
function makeFuncTester(arrOfTests) {
  return function(callback){
    [
        one , two
    ] = arrOfTests;
   return callback(one[0]) == one[1] && callback(two[0]) == two[1] ? true : false
}
}

// /*** Uncomment these to check your work! ***/
// const capLastTestCases = [];
// capLastTestCases.push(['hello', 'hellO']);
// capLastTestCases.push(['goodbye', 'goodbyE']);
// capLastTestCases.push(['howdy', 'howdY']);
// const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
// const capLastAttempt1 = str => str.toUpperCase();
// const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
// console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
// console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true


// CHALLENGE 18
function makeHistory(limit) {
  const history = []; 

  return function(action) {
    if (action === "undo") {
      if (history.length === 0) {
        return "nothing to undo";
      } else {
        const undone = history.pop(); 
        return `${undone} undone`;
      }
    } else {
      history.push(action);

    
      if (history.length > limit) {
        history.shift(); 
      }

      return `${action} done`;
    }
  };
}

// /*** Uncomment these to check your work! ***/
// const myActions = makeHistory(2);
// console.log(myActions('jump')); // => should log 'jump done'
// console.log(myActions('undo')); // => should log 'jump undone'
// console.log(myActions('walk')); // => should log 'walk done'
// console.log(myActions('code')); // => should log 'code done'
// console.log(myActions('pose')); // => should log 'pose done'
// console.log(myActions('undo')); // => should log 'pose undone'
// console.log(myActions('undo')); // => should log 'code undone'
// console.log(myActions('undo')); // => should log 'nothing to undo'


// CHALLENGE 19
function blackjack(deck) {
  let deckIndex = 0; // deck me se card uthana ka index

  return function dealer(num1, num2) {
    let isBusted = false;  // agar bust ho gaya to true hoga
    let total = num1 + num2;
    let called = false;    // pehli baar ke liye

    return function player() {
      if (isBusted) return 'you are done!';

      if (!called) {
        called = true;
        return total; // first time, just return num1 + num2
      }

      // har baar ek card uthao deck me se
      total += deck[deckIndex];
      deckIndex++;

      if (total > 21) {
        isBusted = true;
        return 'bust';
      }

      return total;
    };
  };
}

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

/*** PLAYER 1 ***/


const i_like_to_live_dangerously = deal(4, 5);
console.log(i_like_to_live_dangerously()); // => should log 9
console.log(i_like_to_live_dangerously()); // => should log 11
console.log(i_like_to_live_dangerously()); // => should log 17
console.log(i_like_to_live_dangerously()); // => should log 18
console.log(i_like_to_live_dangerously()); // => should log 'bust'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

/*** BELOW LINES ARE FOR THE BONUS ***/

/*** PLAYER 2 ***/
const i_TOO_like_to_live_dangerously = deal(2, 2);
console.log(i_TOO_like_to_live_dangerously()); // => should log 4
console.log(i_TOO_like_to_live_dangerously()); // => should log 15
console.log(i_TOO_like_to_live_dangerously()); // => should log 19
console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

/*** PLAYER 3 ***/
const i_ALSO_like_to_live_dangerously = deal(3, 7);
console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
