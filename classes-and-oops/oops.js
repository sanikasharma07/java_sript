const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);// this will give current context
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);// here this will give global context here {}

function User(username,logincount, isloggedin){
    this.username=username;
    this.loginCount=logincount
    this.isloggedin=isloggedin
    return this;// when we write new,no need for return
}
// const user1=User('sanika',2,true)
// const user2= User('viresh',5,false)// user 2 will overwrtie user1 so thats why we use new
// console.log(user1,user2)
const user1=new User('sanika',2,true)
const user2=new User('viresh',5,false)
console.log(user1,user2)

//new 
// genrates an empty object
// a constructor is called which wraps all the arguments
// then given to us
console.log(user1.constructor);// gives reference of the main function
console.log(user1 instanceof User);