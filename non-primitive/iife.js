//// Immediately Invoked Function Expressions (IIFE)
// sometimes we want to execute functions immideatly so we use iife also to avoid pllution from global scope
(function chai(){
    // named iife
    console.log('db connected')
}) ();// to define() to execute()
// here ; is important as you must  end the iife before starting any new iife
( (name)=>{
    // simple iife
    console.log('db2 connected')
}

)('sanika');
 