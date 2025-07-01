// User Dot notation
const user1  ={
    name : "tanveer",
    score : 3,
    incerement :function() {
        user1.score++
    }
}
user1.incerement()
user1.score  // 4 
    
// this is a dot notiton to increment value 

const user2 = {};
user2.name = "tanveerkhilji";
user2.score = 1
user2.incerement = function(){
 user2.score++
}
// second way to create this function using prototype 

function UserfunctionusingNew(name,count){
    this.name = name
    this.count = count
}

UserfunctionusingNew.prototype.increment = function(){
    this.count++
}
const userone = new UserfunctionusingNew("tanveer",1);
userone.increment()
console.log(userone)

// best way to create this using class 

class UserCreator{
    constructor(name,count){
        this.name = name;
        this.count = count
    }
    incerement(){
        this.count++
    }
}
let User1 = new UserCreator("TANVEER",0)
User1.incerement()
console.log(User1)

// this is aything best way because this way easy to understerd