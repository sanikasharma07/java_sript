 // for each loop
 const coding = ["js", "ruby", "java", "python", "cpp"]

//  coding.forEach( function (val){
//      console.log(val);
//  } )
// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)  // dont do print me()

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )// this will print values,index and arr
 const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )
const myvalue=myCoding.forEach((items)=>{
    console.log(items)
})
console.log(myvalue)// this will give undefined as foreach loop dosent returns anything
