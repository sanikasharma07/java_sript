//we dont want to execute all the code so we use control flow
//if and else if and else all same as js
// switch case also same as c
const month=1
// instead of no. we can also compare string
switch(month){
    case 1:console.log('jan');
    break;
    default:console.log('m');
    break;
}
// certain values are assumed to be true or false
// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {  // how you will check if an array is empty
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {// how you will check if an object is empty
    console.log("Object is empty");
}
 // // Nullish Coalescing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10-> in place of 10 we normally write some coples condition so if it return a number than good otherwise return null
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20// if we have two conditions,val 1=10
console.log(val1);
// terniary operator
//condition?true:false;
const rupee=100
rupee>=50?console.log('>= than 50'):console.log('less than 50')