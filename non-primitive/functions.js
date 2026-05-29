function myname (){
console.log('s')
console.log('a')
}
myname// this gives reference of the function
myname()// this is how you execute the function
function add2no(number1,number2){// num1,2 are parameters
     console.log(number1+number2)
}
add2no(3,4)// 3 and 4 are arguments
const result=add2no(3,4)// result will be undefined 
console.log(result)
// so rather return number1+number2

function loginUserMessage(username = "sam"){// you can put name here only so now if user enters no name ,it will print sam
    if(!username){// !username means username==undefined
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
// when you dont know how many arguments will be passed in the function
// exampls is when you have to add no of elements in a cart
function calculateCartPrice( ...num1){
    return num1
}
// ... is rest operator 
 console.log(calculateCartPrice(200, 400, 500, 2000))// this will return array
function calculateCartPrice(val1,val2, ...num1){
    return num1
}// 200 val1,400 val 2 return num1->[500,2000]
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
