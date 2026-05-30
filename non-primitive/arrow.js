const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);// it will give user
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()// hitesh will change to sam 

// console.log(this);-> in browser ,this will give window but in node js it will give {}
// when engine run in browser,max objects are window objects
function chai(){
    let username="Sanika"
    console.log(this)// here this.username will give undefined->only work in objects
}
chai()
// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);// rhis will also give undefined
// }
const tea =  () => {// arrow function
    let username = "hitesh"
    console.log(this);// {}->empty object
}// here also this.username will not work
// basic syntax ()=>{}
const name=(username) => console.log(username)// no need to write return->implicit return 
// const name=(username) => (console.log(username))-> you can also do this i.e. add paranthesis 
// you cant write object only like->({})