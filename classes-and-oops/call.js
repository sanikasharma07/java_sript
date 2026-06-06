function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

// function createUser(username, email, password){
//     SetUsername(this, username)
   
//     this.email = email
//     this.password = password
// }
// const user1 = new createUser("sanika", "abc",123)
// console.log(user1.username);
// console.log(SetUsername.username)
// console.log(user1)// here we will not get username because we are calling the function,it is called but after the function is executed it is removed fron global context and variables declared inside the function are not accessible outside the function, so we will get undefined for username when we try to access it from user1 object, but if we try to access SetUsername.username then also we will get undefined    


function createUser(username, email, password){
    SetUsername.call(this, username)// call passing the context of createUser function to SetUsername function, so that we can access the username variable inside SetUsername function and assign it to the username property of createUser function, this is how we can use call method to achieve inheritance in JavaScript, we can also use apply method which is similar to call method but it takes arguments as an array instead of individual arguments
   
     this.email = email
     this.password = password
}
const user1 = new createUser("sanika", "abc",123)
console.log(user1.username);
console.log(user1);