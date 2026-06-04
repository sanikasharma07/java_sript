// most people use fetch( ) and not XMLHttpRequest 
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()// withouth this resolve part will not work
    }, 1000)
})

promiseOne.then(function(){// this function only depends on resolve
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task2')
        resolve()
    },1000)
  
}).then(function(){
    console.log('Promise 2 consumed')
})
const promisethree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "hitesh", password: "123"})
    },1000)
})
promisethree.then(function(user){
    console.log(user)// this will give {username: "hitesh", password: "123"}
})
const promisefour=new Promise(function(resolve,reject){

})
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username// if we print user.username it will give nothing this is wrong
}).then((username)=>{// the value returned by abovve function is passed in it
    console.log(username);
}).catch(function(error){// catch is for reject
    console.log(error);
}).finally(()=>console.log('etiher resolved or rejected'))// after a certain amt of time tells that promise 


const promiseFive=new Promise(function(resolve,reject){
setTimeout(function(){
        let error =true
        if (!error) {
            resolve({username: "sanika", password: "123"})
        } else {
            reject('ERROR: oops!! Everything went wrong')
        }
    }, 1000)
})

//async await-> waits for a function to get complete ifv not then stops
//  async function consumePrommiseFive(){
//     const response= await promiseFive
//     console.log(response);
//  } 
//    consumePrommiseFive() // this way you are not handeling error cause if error is true ,then also you are printing the response
 async function consumePromiseFive(){
    try {
        const response = await promiseFive//"Pause THIS function until the Promise finishes."->await
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}// rather we use try and catch
consumePromiseFive()
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()// the response is in string so we convert it in json and use await here otherwise no output as it takes time to fetch
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()



fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))// heere we dont need await cause one then works then another

// promise.all