// filter
// filter(predicate:
//  (value: number, index: number, array: number[]) => value is number, thisArg?: any): number[]
let mynum=[1,2,3,4,5]
// let value=mynum.filter((num)=>num>4)// unlike foreach it will return the values in value variable
// console.log(value)
// let value=mynum.filter((num)=>{
//     num>4
// })
//console.log(value)// this will give undefined as the return is not there
// correct=> return num>4 // { if you use scope then return is imp here} 
// newnums=[]
// mynum.forEach((num)=>{
//     if(num>4) newnums.push(num) 

// })
//   userBooks = books.filter( (bk) => { 
//     return bk.publish >= 1995 && bk.genre === "History"
// })
// const t=mynum.filter((items)=>{
//     const result=items+10
//     return result
// });
// console.log(t)// this gives error as in js it asks is the cindition true or not if true then return the value else not
const t=mynum.map((items)=>{
    const result=items+10
    return result
 });
 console.log(t)
 // we cabn do like mynum.map().map.filter
 const newNums = mynum
                .map((num) => num * 10 )
                .map( (num) => num + 1)// here the values will be after satisfying first condition
                .filter( (num) => num >= 40)

console.log(newNums);
// 
const mytotal=mynum.reduce(function(acc,currval){
    console.log(`acc:${acc} curr val:${currval}`)
    return acc+currval
},0)// 0 is there for initialisation of acc 
console.log(mytotal)// it will return the last value 
// so 0+1 then 1 return 1+2 then 3 return ... so on













