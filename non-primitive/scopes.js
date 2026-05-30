//{}->scope
let a = 300
if (true) {
    let a = 10
    const b = 20
     console.log("INNER: ", a);
    var c=300// now this will be 300 even outside this scope ,so not recomended
}
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()// i have to call two to execute function two

}

// one()
// ways to declare a function
console.log(addone(5))// we can execute before function also

function addone(num){
    return num + 1
}



addTwo(5)// if we declare func using a var,we cant execute it before function
const addTwo = function(num){
    return num + 2
}

