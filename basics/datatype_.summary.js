// there are two kind of data types on the basis of how data is stored in memoery and how it is accesed 
// primitive(call by value )
//7 types:string,number,boolean,null,undefined,symbol,bigint

let id=Symbol("123")
let newid=Symbol("123")
console.log(id===newid)//false
// symbol is used for uniqeness
// for very bog num=23456789123456789123n-> n is for bigint

// reference(non primitive)-changes in orignal 
// array,objects,functions
// retuen off bith of them expcept func is funvtion
// for func its object function
 