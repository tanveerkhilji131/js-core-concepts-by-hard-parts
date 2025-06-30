let user1  = Object.create(null);
user1.name = "tanveer";
user1.count = 2
user1.incrementCounter = function(){
    this.count = this.count +1
}
// user1.incrementCounter()
// console.log(user1)
// this is increment count because incrementCounter function inside . notion and this is outer value incremented 
// but this is bed way to create Object 
function UserCreator(name , count){
    const newUser = Object.create(UserFunctionStore)
    newUser.name = name
    newUser.count = count
   
    return newUser
}
const UserFunctionStore = {
   increment : function(){
    this.count++
   },
   login : function(){
    console.log("Logged In")
   }
}
let userOne = UserCreator("tanveerKhilji",3)
userOne.increment()
console.log(userOne)
console.log(userOne.__proto__ === UserFunctionStore) // true
// this is best way this function not waste memeory 