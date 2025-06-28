/* CHALLENGE 1 */

function sayHowdy() {
  console.log('Howdy');
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log('Partnah');
}
// After thinking it through, uncomment the following line to check your guess!
//testMe(); // what order should these log out? Howdy or Partnah first?

// -----------------------------------------------------------------

/* CHALLENGE 2 */

function delayedGreet() {
  // ADD CODE HERE
  setTimeout(()=>{
    console.log("welcome");
  },3000)
}
// Uncomment the following line to check your work!
 //delayedGreet(); // should log (after 3 seconds): welcome


// -----------------------------------------------------------------

/* CHALLENGE 3 */

function helloGoodbye() {
  setTimeout(()=>{console.log("good bye")},2000)
  console.log("hello")
}
// Uncomment the following line to check your work!
//helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye

// -----------------------------------------------------------------


/* CHALLENGE 4 */

function brokenRecord() {
  setInterval(()=>{
    console.log("hi again")
  },1000)
}
// Uncomment the following line to check your work!
 // brokenRecord(); // should log (every second): hi again

// -----------------------------------------------------------------


/* CHALLENGE 5 */
function limitedRepeat() {
  let count = 0;

  const intervalID = setInterval(() => {
    console.log("hi for now");
    count++;

    if (count >= 5) {
      clearInterval(intervalID); // stop after 5 times
    }
  }, 1000);
}

// Uncomment the following line to check your work!
// limitedRepeat(); // should log (every second, for 5 seconds): hi for now

// -----------------------------------------------------------------


/* CHALLENGE 6 */

function everyXsecsForYsecs(fn,start,end) {
  let count = 0;
 let interval =  setInterval(()=>{
    count++
    fn()
    if(count == end){
      clearInterval(interval);
    }
  },start)
}
// Uncomment the following lines to check your work!
function theEnd() {
  console.log('This is the end!');
}
// everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!

// -----------------------------------------------------------------

/* CHALLENGE 7 */

function delayCounter(target, wait) {
  let count = 0;
  return function(){
    let id = setInterval(()=>{
      count++
      console.log(count);
      if(count == target){
        clearInterval(id)
      }
      
    },wait)
  }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const countLogger = delayCounter(3, 1000)
// countLogger();
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3

// -----------------------------------------------------------------

/* CHALLENGE 8 */

function promised (val) {
 return new Promise(function(resolve,reject){
   setTimeout(()=>{
      resolve(val)
    },2000)
  })
   
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const createPromise = promised('wait for it...');
// createPromise.then((val) => console.log(val)); 
// will log "wait for it..." to the console after 2 seconds

// -----------------------------------------------------------------

/* CHALLENGE 9 */


class SecondClock {
  constructor(cb) {
    // ADD CODE HERE
   this.cb = cb;
   this.sec = 0;
   this.timer = null
   
  }
  // ADD METHODS HERE
  start(){
   this.id = setInterval(()=>{
    if(this.sec != 60){
    this.sec++
    console.log(this.sec)
    }else if(this.sec == 60){
        this.sec = 0
    }
   },1000)

  }
  reset(){
    clearInterval(this.id)
  }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const clock = new SecondClock((val) => { console.log(val) });
// console.log("Started Clock.");
// clock.start();
// setTimeout(() => {
//     clock.reset();
//     console.log("Stopped Clock after 6 seconds.");
// }, 6000);

// -----------------------------------------------------------------

/* CHALLENGE 10 */

function debounce(callback, interval) {
    let timer ;
   return function(){
        clearInterval(interval)
      timer = setTimeout(()=>{
      callback();
      
    },interval)
   }
}
function debounce(fn, interval) {
  let timeoutId;

  return function (...args) {
    // If there's an existing timer, clear it
    clearTimeout(timeoutId);

    // Set a new timer
    timeoutId = setTimeout(() => {
      fn.apply(this, args); // call the original function
    }, interval);
  };
}


// UNCOMMENT THESE TO TEST YOUR WORK!
// function giveHi() { return "hi" }
// const giveHiSometimes = debounce(giveHi, 3000);
// console.log(giveHiSometimes()); // -> 'hi'
// setTimeout(function() { console.log(giveHiSometimes()); }, 2000); // -> undefined
// setTimeout(function() { console.log(giveHiSometimes()); }, 4000); // -> undefined
// setTimeout(function() { console.log(giveHiSometimes()); }, 8000); // -> 'hi'
