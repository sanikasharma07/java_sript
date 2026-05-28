 // [],can have diff kind of elements,resizable
 // deep copying- no change in orignal array
 // shallow copy-> same refrence point(change in orignal array)
 // we can also declare array like new Array(1,2,3,4)
 const myarr=[0,2,3,4]
 myarr.push(6) // value will be pushed at last
 myarr.pop()// removes last value
 // myarr.unshift(9)-> this will insert value in the start
 // .shift()-> removes first value
// arr.join()-> converts array in a string
 // .includes(9)->yes or no .indexof(9)-> gives index
const nw=myarr.slice(1,3) //returns from myarr[1] to myarr[2] 3 is not included
nw[0]=1
console.log(myarr)
console.log(nw)
const nw1=myarr.splice(1,3)// 3 is included
// main diff splice trims the array i.e. the portion selected is fully removed
// when i push one array in other,it will treat that inserted array as its element like arr[3]= to that new array
//concat gives you a new array by combining two arrays 
// so unless you store a result in new array,no change
// Non-mutating methods (return new array)
// concat()
// slice()
// map()
// filter()
// toSorted()
// Mutating methods (change original array)
// push()
// pop()
// shift()
// unshift()
// splice()
// sort()
// reverse()

// we can also use sperad to join two arrays-> array=[...arr1, ...arr2]-> this will result in spread of all the values of both arrays
 const anparr=[1,2,3,[4,5],6,[3,[1,2]]]
 // now to resole it into a simple array
 const rarr=anparr.flat(Infinity)// infinity is depth till with we have to solve and resolve array (try to write actual depth)
console.log(Array.isArray("sanika"))// to check if a dta type is an array
Array.from("sanika")// forms an array of s a n i k a
console.log(Array.from({name:"sanika"}))// gives an emoty array since it is not sure wether to convert key or value in array
// can also use Array.of()
