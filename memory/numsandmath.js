 // to explicitly define data type,write const score=  new Number(100)
const balance=new Number(100.2345)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.length)//undefined
console.log(balance.toFixed(2));//100.00
console.log(balance.toPrecision(3));//gives a string with precise value 3->answer will contain 3 significant value ans=100
const hundred=1000000
console.log(hundred.toLocaleString('en-IN'));// give commas in indian format
//**********Math**********
// type console.log(Math) on console to see all the function of math
//.abs(-4)
// ,.round(4.6)->roundoff of 4.6,ceil(4.2)->5,floor(4.6)->4,
// .min(3,7,5,2)->3,.max()->max value
console.log(Math.random())// generates value bw 0 and 1 
console.log(Math.floor(Math.random()*10)+1);// make sure the value is greater than 1
// if you want value to be in a range
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)


