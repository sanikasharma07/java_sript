// "" or '' both ok 
// we can use + and add strings but use interpolation

console.log('Hello my name is ${name} and my age is ${age}')
// this is called string interpolation

const name=new String('Sanika')
// this behaves like an object(non primitive)
// const a ="Sanika"  a==name true a===name false
// primitive strings are immutable
console.log(name[0])
console.log(name.__proto__)
console.log(name.toUpperCase)// this will not change orignal string as we can only change string objects
// we have other functions like .charAt(2) or indexOf('t')
// to divide in two substring  .substring(start:end)-> cant give -ve values
// .slice(start:end) can give -ve values
// "   Sanika  " .trim() to remove spaces 
// url="abc" url.replace('a','-')
// url.includes('ab')->true
// .split(seprator,limit) ex .split(' ')
// **imp**-> No prototype function can change actual string
 