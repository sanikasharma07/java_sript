// for loop
// while do while
let score=1
do{
    console.log(`${score}`);
   score+=2;
}while(score<=10);
//*******high order array loops**********
// for of loop
//for(const of object)
const arr=[1,2,3,4]
for( const num of arr){
    console.log(`${num}`)
}
// here no increment needed 

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}
// maps
// they remember the order in which we insert key value pair unlike objects
const map=new Map()
map.set('IN','India')
map.set('Fr', "France")
map.set('IN', "India")// multiple values not accepted
// but values can be duplicate
console.log(map)
for(const key of map){
    console.log(key)
}// this will print both key and values
for(const [key,values] of map){// this is the syntax if i want to print any one of them
    console.log(key)
}
const myobj={
    name:'sanika',
    age:18
}

for(const key of Object.keys(myobj)){// this will not give error
    console.log(key)
}
// for(const key of myobj){// this will give error 
//     console.log(key)
// }
// for in loops
for(const key in myobj){
    console.log(key)// this will give only keys
    console.log(myobj[key])
}
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}// so for in loops always print keys be it of arrays or objects



// for (const key in map) {
//     console.log(key);
// }// for in loops do not work for maps


