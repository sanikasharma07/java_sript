//temporal->still not a global object but in future can be
let newDate= new Date()
console.log(newDate.toString())
console.log(newDate.toDateString())
console.log(newDate.toLocaleString())
console.log(newDate.toJSON())
console.log(typeof newDate)
let mydate=new Date(2023,0,23)// month starts from 0
console.log(mydate.toDateString());// month date year
let myydate=new Date(2023,0,23,5,3);
console.log(mydate.toLocaleString());
// new Date("2023-01-14") or new Date(01-14-2023") any format can be used 
//when we compare dates in real time projects we convert it in miliseconds and do it
let ts=Date.now()// gives miliseconds starting from 19 jan 1970 to today
console.log(ts);
console.log(mydate.getTime())
// to convert in seconds Math.floor(mydate.getTime()/1000)
//mydate.getMonth()-> gives 2 then it is march // month is 0 based in js
console.log(`today the date is ${newDate} .The day is ${newDate.getDay()}`) 
// ('default',{weekday:"long" })_> currently mon but i will give monday so you can customize