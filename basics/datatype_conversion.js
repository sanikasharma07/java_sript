let score=null
let score1="33"//string
let score2="33abc"//string
let score3=undefined
console.log(typeof score);
console.log(typeof score1);
let numofscore=Number(score);// can also ise for String,Bool etc
let numofscore1=Number(score1);
let numofscore2=Number(score2);
let numofscore3=Number(score3);
console.log(numofscore);// number of null will give 0 which is kind of wrong lets say when you wanna compare temp,null means no value could come but it gives 0 for null which is a temp
console.log(numofscore1);
console.log(numofscore2);// nan as abc cant be converted in number
console.log(numofscore3);
//NaN-not an number
let isloggedin=undefined
let booleanof=Boolean(isloggedin);
console.log(booleanof);// gives false
//null->false
// -1->true
   //1-> gives true 
// converting empty string " "->false
//converting any string "Sanika"-> true


